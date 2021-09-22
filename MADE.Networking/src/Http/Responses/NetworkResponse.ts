/**
 * Defines a response message that includes the status and response content.
 */
export class NetworkResponse<T> {
    /**
     * The status code of the response.
     */
    public statusCode: number;

    /**
     * The content of the response.
     */
    public content: T;

    public constructor(statusCode: number, content: T) {
        this.statusCode = statusCode;
        this.content = content;
    }

    /**
     * Throws an exception if the status code is not a success status code.
     * @returns {NetworkResponse<T>} This response message.
     */
    public ensureSuccessStatusCode(): NetworkResponse<T> {
        if (!this.isSuccessStatusCode) {
            throw new Error(`Unexpected status code: ${this.statusCode}`);
        }
        return this;
    }

    /**
     * Determines whether the status code is a success status code.
     * @returns {boolean} True if the status code is a success status code; otherwise, false.
     */
    public isSuccessStatusCode(): boolean {
        return this.statusCode >= 200 && this.statusCode < 300;
    }
}