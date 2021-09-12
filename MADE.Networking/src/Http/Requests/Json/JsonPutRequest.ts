import { AxiosInstance, AxiosRequestConfig } from "axios";
import Guid from "made-runtime/Guid";
import NetworkResponse from "../../Responses/NetworkResponse";
import INetworkRequest from "../INetworkRequest";

/**
 * Defines a JSON network request for a PUT endpoint.
 */
export default class JsonPutRequest implements INetworkRequest {
    identifier: Guid;
    url: string;
    headers: any;

    /**
     * The data to send with this request.
     */
    data: any;

    private _client: AxiosInstance;

    constructor(client: AxiosInstance, url: string, data: any, headers: any = {}) {
        if (!client) {
            throw new Error('A client AxiosInstance is required');
        }

        if (!url) {
            throw new Error('A URL is required');
        }

        this._client = client;
        this.identifier = Guid.newGuid();
        this.url = url;
        this.headers = headers;
        this.data = data;
    }

    equals(other: INetworkRequest): boolean {
        return this.identifier.equals(other.identifier);
    }

    execute<TResponse>(): Promise<NetworkResponse<TResponse>> {
        if (!this.url) {
            throw new Error('No URL has been specified for executing the network request');
        }

        let config: AxiosRequestConfig;
        config = { data: this.data || {}, headers: this.headers || {} };
        config.headers['Content-Type'] = 'application/json';
        config.method = 'PUT';
        config.url = this.url;

        return this._client(config)
            .then((response) => {
                return new NetworkResponse<TResponse>(response.status, response.data || {});
            })
            .catch((error) => {
                if (error && error.response) {
                    return new NetworkResponse<TResponse>(error.response.status, error.response.data || {});
                }

                return new NetworkResponse<TResponse>(500, {} as TResponse);
            });
    }
}