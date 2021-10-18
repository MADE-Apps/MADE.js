import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Guid } from "made-runtime";
import { NetworkResponse } from "../../Responses/NetworkResponse";
import { HttpMethod } from "../HttpMethod";
import { INetworkRequest } from "../INetworkRequest";

/**
 * Defines a base JSON network request.
 */
export abstract class JsonRequest implements INetworkRequest {
    /**
     * Gets the unique identifier for this request.
     */
    identifier: Guid;

    /**
     * Gets the URL to call for this request.
     */
    url: string;

    /**
     * Gets the headers to send as part of this request.
     */
    headers: any;

    private _client: AxiosInstance;
    private _method: HttpMethod;

    constructor(client: AxiosInstance, method: HttpMethod, url: string, data: any, headers: any = {}) {
        if (!client) {
            throw new Error('A client AxiosInstance is required');
        }

        if (!url) {
            throw new Error('A URL is required');
        }

        this._client = client;
        this._method = method;
        this.identifier = Guid.newGuid();
        this.url = url;
        this.headers = headers;
    }

    equals(other: INetworkRequest): boolean {
        return this.identifier.equals(other.identifier);
    }

    execute<TResponse>(): Promise<NetworkResponse<TResponse>> {
        if (!this.url) {
            throw new Error('No URL has been specified for executing the network request');
        }

        let config: AxiosRequestConfig;
        config = { ...this.getConfig(), headers: this.headers };
        if (!config.headers) {
            config.headers = {};
        }
        config.headers['Content-Type'] = 'application/json';
        config.method = this._method;
        config.url = this.url;

        return this._client(config)
            .then((response) => {
                return new NetworkResponse<TResponse>(response.status, response.data as TResponse || {} as TResponse);
            })
            .catch((error) => {
                if (error && error.response) {
                    return new NetworkResponse<TResponse>(error.response.status, error.response.data || {});
                }

                return new NetworkResponse<TResponse>(500, {} as TResponse);
            });
    }

    /**
     * Retrieves the Axios request configuration to be used for this request.
     */
    abstract getConfig(): AxiosRequestConfig;
}