import { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpMethod } from "../HttpMethod";
import { JsonRequest } from "./JsonRequest";

/**
 * Defines a JSON network request for a GET endpoint.
 */
export class JsonGetRequest extends JsonRequest {
    /**
     * The query params to send with this request.
     */
    params: any;

    constructor(client: AxiosInstance, url: string, headers: any = {}, params: any = {}) {
        super(client, HttpMethod.GET, url, headers);
        this.params = params;
    }

    getConfig(): AxiosRequestConfig<any> {
        return { params: this.params || {} };
    }
}