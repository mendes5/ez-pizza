import { getServerURL } from "./get-server-url";

export const apiGet = (path, queryParameters = {}) => {
    const search = new URLSearchParams(queryParameters);
    const url = getServerURL();
    url.pathname = path;
    url.search = search;

    const request = fetch(url);
    return request.then(response => response.json());
};

