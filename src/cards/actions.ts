import axios from 'axios';
var guests = require('../assets/list.json');

const lists = {
  unconfirmed: "5c7cb8737a02455b12d4d7b3",
  attending: "5c7cb87958dd6a13b55d3d62",
  declined: "5c7cb87b540ca621a484809b"
};

const TRELLO_KEY = process.env.TRELLO_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const trelloURL="https://api.trello.com/1";

export const going: any = (
  index: string,
  setLoading: (loading: boolean) => void) => {
    setLoading(true);
    return putData(`${trelloURL}/cards/${guests[index].id}`, {idList: lists.attending})
      .then(
        apiCard => {
          setLoading(false);
          return apiCard
        },
        error => {
          setLoading(false);
          console.log(error);
        }
      )
}

export const notGoing: any = (
  index: string,
  setLoading: (loading: boolean) => void) => {
    setLoading(true);
    return putData(`${trelloURL}/cards/${guests[index].id}`, {idList: lists.declined})
      .then(
        apiCard => {
          setLoading(false);
          return apiCard
        },
        error => {
          setLoading(false);
          console.log(error);
        }
      )
}

export const getGuest: any = (index: number) => {
  try {
    return guests[index]
  } catch (error) {
    return null
  }
}

const putData = (url = "", data = {}): Promise<any> => {
  // Default options are marked with *
    return axios(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data), // body data type must match "Content-Type" header
        params: {
          key: TRELLO_KEY,
          token: TRELLO_TOKEN
        }
    }); // parses response to JSON
}