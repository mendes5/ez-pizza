import { getServerURL } from "./get-server-url";

export const apiGet = (path, queryParameters = {}) => {
  const search = new URLSearchParams(queryParameters);
  const url = getServerURL();
  url.pathname = path;
  url.search = search;

  return fetch(url).then((response) => response.json());
};

export const apiPost = (path, body) => {
  const url = getServerURL();
  url.pathname = path;

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  }).then((response) => response.json());
};
