import { ITimer, Timer } from "made-threading";
import { INetworkRequestManager } from "./INetworkRequestManager";
import { INetworkRequest } from "./Requests/INetworkRequest";
import { NetworkRequestCallback } from "./Requests/NetworkRequestCallback";
import { NetworkResponse } from "./Responses/NetworkResponse";

/**
 * Defines a manager for executing queued network requests.
 */
export class NetworkRequestManager implements INetworkRequestManager {
    currentQueue: NetworkRequestCallback[];
    private _timer: ITimer;
    private _isProcessingRequests: boolean = false;

    constructor() {
        this.currentQueue = [];
        this._timer = new Timer(this.processCurrentQueue, 60000, true);
    }

    count(): number {
        return this.currentQueue.length;
    }

    start(intervalMilliseconds: number): void {
        this._timer.interval = intervalMilliseconds;
        this._timer.start();
    }

    stop(): void {
        this._timer.stop();
    }

    addOrUpdate<TResponse>(request: INetworkRequest, successCallback: (response: NetworkResponse<TResponse>) => void, errorCallback: (error: NetworkResponse<TResponse>) => void): void {
        var requestCallback = new NetworkRequestCallback(request, successCallback, errorCallback);
        var index = this.currentQueue.findIndex(x => x.request.equals(request));
        if (index >= 0) {
            this.currentQueue[index] = requestCallback;
        } else {
            this.currentQueue.push(requestCallback);
        }
    }

    async processCurrentQueue(): Promise<void> {
        if (this._isProcessingRequests) {
            return;
        }

        this._isProcessingRequests = true;

        try {
            while (this.count() > 0) {
                var requestCallback = this.currentQueue.shift();
                if (requestCallback) {
                    var response = await requestCallback.request.execute();
                    console.log(response);
                    if (response.isSuccessStatusCode()) {
                        requestCallback.successCallback(response);
                    } else {
                        requestCallback.errorCallback(response);
                    }
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            this._isProcessingRequests = false;
        }
    }
}