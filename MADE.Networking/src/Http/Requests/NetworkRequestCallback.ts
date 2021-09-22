import { NetworkResponse } from "../Responses/NetworkResponse";
import { INetworkRequest } from "./INetworkRequest";

/**
 * Defines a model for a callback from a network request.
 */
export class NetworkRequestCallback {
    /**
     * The network request.
     */
    request: INetworkRequest;

    /**
     * The callback on a successful request.
     */
    successCallback: (response: NetworkResponse<unknown>) => void;

    /**
     * The callback on a failed request.
     */
    errorCallback: (error: NetworkResponse<unknown>) => void;

    constructor(request: INetworkRequest, successCallback: (response: NetworkResponse<any>) => void, errorCallback: (error: NetworkResponse<any>) => void) {
        this.request = request;
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
    }
}