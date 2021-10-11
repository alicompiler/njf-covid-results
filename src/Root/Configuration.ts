export interface Configuration {
    serverUrlBase: string;
}

export const configuration: Configuration = {
    serverUrlBase: process.env.REACT_APP_SERVER_URL_BASE ?? ""
}