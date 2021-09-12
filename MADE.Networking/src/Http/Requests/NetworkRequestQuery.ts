/**
 * Defines a model for a network request query.
 */
export default class NetworkRequestQuery {
    private _queryParts: Array<[string, any]>;

    constructor(...params: Array<[string, any]>) {
        this._queryParts = params;
    }

    /**
     * Creates a network request query model from a URI.
     * @param {string} uri The URI.
     * @returns {NetworkRequestQuery} The network request query model.
     */
    public static fromUri(uri: string): NetworkRequestQuery {
        const queryString = uri.split('?')[1];
        return this.fromQueryString(queryString);
    }

    /**
     * Creates a network request query model from a query string.
     * @param {string} queryString The query string.
     * @returns {NetworkRequestQuery} The network request query model.
     */
    public static fromQueryString(queryString: string): NetworkRequestQuery {
        var queryParts = queryString.split('&').map(part => {
            const [key, value] = part.split('=');
            return [key, value];
        }) as [string, any][];

        return new NetworkRequestQuery(...queryParts);
    }

    /**
     * Gets the network request query as a query string (e.g. key=value&key=value).
     * @returns {string} The query string.
     */
    public toString(): string {
        return this._queryParts.map(([key, value]) => this.getQueryPart(key, value)).join('&');
    }

    /**
     * Gets a value from the query with the given key.
     * @param {string} key The key of the query value to retrieve.
     * @returns {any} The value of the query with the given key.
     */
    public getValue(key: string): any {
        const queryPart = this._queryParts.find(part => part[0] === key);
        return queryPart ? queryPart[1] : null;
    }

    private getQueryPart(key: string, value: any): string {
        return Array.isArray(value) ? value.map(v => `${key}=${v}`).join('&') : `${key}=${value}`;
    }
}
