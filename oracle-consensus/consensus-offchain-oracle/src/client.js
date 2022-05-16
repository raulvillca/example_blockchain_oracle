require("dotenv").config();

import {
  createRequest
} from "./ethereum";


const start = () => {

  let urlToQuery = process.env.URL_API;
  let attributeToFetch = 'Website';

  createRequest({
      urlToQuery,
      attributeToFetch
    })
    .then(restart)
    .catch(error);
};

const restart = () => {
  wait(process.env.TIMEOUT).then(start);
};

const wait = (milliseconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds));
};

const error = (error) => {
  console.error(error);
  restart();
};

export default start;