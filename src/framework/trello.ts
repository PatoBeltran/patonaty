import axios from 'axios';
var guests = require('../assets/list.json') as GuestsList;
import runtimeEnv from '@mars/heroku-js-runtime-env';

const lists = {
  unconfirmed: "5c7cb8737a02455b12d4d7b3",
  attending: "5c7cb87958dd6a13b55d3d62",
  declined: "5c7cb87b540ca621a484809b"
};

const labels: { [key: string]: 'she' | 'he' } = {
    '5c7f62ab1b476953dd4e37d9': 'she',
    '5c7f62a55da31988e945b65f': 'he'
}

const update = async (
  guest: GuestMetadata,
  listId: string,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const apiCard = await trelloRequest(`cards/${guest.id}`, 'PUT', { idList: listId });
    return apiCard;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export const going = async (
  guest: GuestMetadata,
  setLoading: (loading: boolean) => void
) => {
  return await update(guest, lists.attending, setLoading)
}

export const notGoing = async (
  guest: GuestMetadata,
  setLoading: (loading: boolean) => void
) => {
  return await update(guest, lists.declined, setLoading)
}

export const getGuest = async (
  urlPath: string, 
  setLoading: (loading: boolean) => void,
  setCurrentGuest: (guest: GuestMetadata | 'not found') => void
) => {
  setLoading(true);
  try {
    const localGuest = guests[urlPath];
    if (localGuest) {
      const trelloResponse = await trelloRequest(`cards/${localGuest.id}`);

      let plusOne = undefined;
      if (trelloResponse.data.desc) {
        const plusOneResponse = await trelloRequest(`cards/${trelloResponse.data.desc}`);
        plusOne = toGuestMetadata(plusOneResponse.data);
      }

      setCurrentGuest(toGuestMetadata(trelloResponse.data, plusOne));
    } else {
      setCurrentGuest('not found');
    }
  } catch (error) {
    setCurrentGuest('not found');
    console.log(error);
  } finally {
    setLoading(false);
  }
}

const toGuestMetadata = (card: any, plusOne?: GuestMetadata): GuestMetadata => {
  return {
    name: card.name,
    id: card.id,
    status: getStatus(card.idList),
    pronoun: labels[card.idLabels[0]],
    plusOne: plusOne
  };
}

const getStatus = (idList: string) => {
  switch (idList) {
    case lists.unconfirmed:
      return 'unconfirmed';
    case lists.attending:
      return 'attending';
  }
    
  return 'declined';
}

const trelloRequest = (url: string, method='GET', data = {}): Promise<any> => {
    const env = runtimeEnv();

    return axios(`https://api.trello.com/1/${url}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
        params: {
            key: env.REACT_APP_TRELLO_KEY,
            token: env.REACT_APP_TRELLO_TOKEN
        }
    });
}