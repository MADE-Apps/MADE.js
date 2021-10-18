import { IEquatable } from "./IEquatable";

/**
 * Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
 */
export class Uri implements IEquatable<Uri> {
    private _uri: string;

    /**
     * Gets the absolute path of the URI.
     * @returns {string} A string containing the absolute path to the resource.
     */
    public absolutePath: string;

    /**
     * Gets the absolute URI.
     * @returns {string} A string containing the entire URI.
     */
    public absoluteUri: string;

    /**
     * Gets the Domain Name System (DNS) host name or IP address and the port number for a server.
     * @returns {string} A string containing the authority component of the URI.
     */
    public authority: string;

    /**
     * Gets the escaped URI fragment.
     * @returns {string} A string that contains any URI fragment information.
     */
    public fragment: string;

    /**
     * Gets the host component of the URI.
     * @returns {string} A string that contains the host name. This is usually the DNS host name or IP address of the server.
     */
    public host: string;

    /**
     * Gets a value indicating whether the URI is absolute.
     * @returns {boolean} True if the URI is absolute; otherwise, false.
     */
    public isAbsoluteUri: boolean;

    /**
     * Gets a value indicating whether the URI is a file URI.
     * @returns {boolean} True if the URI is a file URI; otherwise, false.
     */
    public isFileUri: boolean;

    /**
     * Gets any query information included in the specified URI.
     * @returns {string} A string containing the URI query.
     */
    public query: string;

    /**
     * Gets the query information as their individual parts in a dictionary.
     * @returns {[key: string]: string} A dictionary containing the query parts.
     */
    public queryParts: { [key: string]: string };

    /**
     * Gets the scheme name for this URI.
     * @returns {string} A string that contains the scheme name.
     */
    public scheme: string;

    /**
     * Gets an array containing the path segments that make up the specified URI.
     * @returns {string[]} An array of strings that contains the path segments.
     */
    public segments: string[];

    /**
     * Initializes a new instance of the Uri class using a URI value represented by a string.
     * @param {string} uri - A string that contains a valid URI.
     */
    constructor(uri: string) {
        this._uri = uri;
        this.absolutePath = this._uri.substring(0, this._uri.indexOf("?") > 0 ? this._uri.indexOf("?") : this._uri.length);
        this.absoluteUri = this._uri;
        this.authority = this._uri.substring(this._uri.indexOf("//") + 2, this._uri.indexOf("/", this._uri.indexOf("//") + 2));
        this.fragment = this._uri.substring(this._uri.indexOf("#") + 1);
        this.host = this._uri.substring(8, this._uri.indexOf("/", 8));
        this.isAbsoluteUri = this._uri.indexOf("//") > 0;
        this.isFileUri = this._uri.indexOf("file://") === 0;
        this.query = this._uri.substring(this._uri.indexOf("?") + 1);
        this.queryParts = this.parseQueryParts();
        this.scheme = this._uri.substring(0, this._uri.indexOf(":"));
        this.segments = this.absolutePath.replace(`${this.scheme}:`, "").split("/").filter((value: string) => value !== "");
    }

    /**
     * Retrieves a query part from the URI based on the specified key.
     * @param {string} key - The key of the query part to retrieve.
     * @returns {string} A string that contains the value of the query part.
     */
    getQueryValue(key: string): string {
        let queryParts: { [key: string]: string } = this.queryParts;
        return queryParts[key];
    }

    private parseQueryParts(): { [key: string]: string } {
        let queryParts: { [key: string]: string } = {};
        let query: string = this.query;
        let queryPartsArray: string[] = query.split("&");
        for (let i: number = 0; i < queryPartsArray.length; i++) {
            let queryPart: string = queryPartsArray[i];
            let queryPartArray: string[] = queryPart.split("=");
            queryParts[queryPartArray[0]] = queryPartArray[1];
        }
        return queryParts;
    }

    public toString(): string {
        return this._uri;
    }

    equals(other: Uri): boolean {
        return this._uri === other._uri;
    }
}
