import { Guid, IEquatable } from "made-runtime";
import { NetworkResponse } from "../Responses/NetworkResponse";

/**
 * Defines an interface for network requests.
 */
export interface INetworkRequest extends IEquatable<INetworkRequest> {
    /**
     * The unique identifier for this request.
     */
    identifier: Guid;

    /**
     * The URL for this request.
     */
    url: string;

    /**
     * Any headers to associate with this request.
     */
    headers: any;

    /**
     * Executes the network request.
     * @returns A promise that resolves the network response.
     */
    execute<TResponse>(): Promise<NetworkResponse<TResponse>>;
}