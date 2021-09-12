import INetworkRequest from "./Requests/INetworkRequest";
import NetworkRequestCallback from "./Requests/NetworkRequestCallback";
import NetworkResponse from "./Responses/NetworkResponse";

/**
 * Defines an interface for a network request manager.
 */
export default interface INetworkRequestManager {
    /**
     * The current queue of network requests.
     */
    currentQueue: Array<NetworkRequestCallback>;

    /**
     * Starts the network request manager processing the queue of network requests on a specified interval.
     * @param {number} intervalMilliseconds The interval in milliseconds to process the queue of network requests.
     */
    start(intervalMilliseconds: number): void;

    /**
     * Stop the processing of the network manager requests.
     */
    stop(): void;

    /**
     * Adds or updates a network request in the queue.
     * @param {INetworkRequest} request The network request to add or update.
     * @param {(response: TResponse) => void} successCallback The callback to execute when the network request is successful.
     * @param {(response: TResponse) => void} errorCallback The callback to execute when the network request fails.
     */
    addOrUpdate<TResponse>(request: INetworkRequest, successCallback: (response: NetworkResponse<TResponse>) => void, errorCallback: (error: NetworkResponse<TResponse>) => void): void;

    /**
     * Forces the processing of the current queue of network requests.
     */
    processCurrentQueue(): Promise<void>;

    /**
     * Determines the number of items in the queue.
     * @returns {number} The number of items in the queue.
     */
    count(): number;
}