import { SERVER_PORT, SERVER_URL } from "../constants";

export const getServerURL = () => {
    const url = new URL(SERVER_URL);
    url.port = SERVER_PORT;
    return url;
};
