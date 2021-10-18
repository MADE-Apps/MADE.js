import { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpMethod } from "../HttpMethod";
import { JsonRequest } from "./JsonRequest";

/**
 * Defines a JSON network request for a POST endpoint.
 */
export class JsonPostRequest extends JsonRequest {
    /**
     * The data to send with this request.
     */
    data: any;

    constructor(client: AxiosInstance, url: string, data: any, headers: any = {}) {
        super(client, HttpMethod.POST, url, headers);
        this.data = data;
    }

    getConfig(): AxiosRequestConfig<any> {
        return { data: this.data || {} };
    }
}