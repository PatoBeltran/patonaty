import axios from 'axios';
var guests = require('../assets/list.json') as GuestsList;

const lists = {
  unconfirmed: "5c7cb8737a02455b12d4d7b3",
  attending: "5c7cb87958dd6a13b55d3d62",
  declined: "5c7cb87b540ca621a484809b"
};

const update: any = async (
  guestId: string,
  listId: string,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const apiCard = await putDataToTrello(`cards/${guestId}`, { idList: listId });
    setLoading(false);
    return apiCard;
  }
  catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export const going: any = async (
  guestId: string,
  setLoading: (loading: boolean) => void
) => {
  return await update(guestId, lists.attending, setLoading)
}

export const notGoing: any = async (
  guestId: string,
  setLoading: (loading: boolean) => void
) => {
  return await update(guestId, lists.declined, setLoading)
}

export const getGuest = (urlPath: string) => {
  try {
    return guests[urlPath]
  } catch (error) {
    return null
  }
}

const putDataToTrello = (url = "", data = {}): Promise<any> => {
  return axios(`https://api.trello.com/1/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
    params: {
      key: process.env.TRELLO_KEY,
      token: process.env.TRELLO_TOKEN
    }
  });
}