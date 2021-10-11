import {configuration} from "../Root/Configuration";
import {Endpoints} from "./Endpoints";

export interface UrlManager {
    getUrl(path: string): string;

    getEndpoint(endpoint: Endpoints): string;
}

export class DefaultUrlManager implements UrlManager {
    getUrl(path: string): string {
        if (path.startsWith("/")) {
            path = path.substr(1);
        }
        return configuration.serverUrlBase + path;
    }

    getEndpoint(endpoint: Endpoints): string {
        return this.getUrl(endpoint);
    }
}