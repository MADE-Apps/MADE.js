/**
 * Defines a builder for constructing a string from values.
 */
export class StringBuilder {
    private _strings: string[];

    /**
     * Initializes a new instance of the StringBuilder class with an optional starting string value.
     * @param value The optional starting string value.
     */
    constructor(value: string | StringBuilder | null = null) {
        this._strings = [];
        this.append(value);
    }

    /**
     * Appends the value to this instance.
     * @param value The value to append.
     * @returns {StringBuilder} A reference to this instance after the append operation has completed.
     */
    public append(value: string | StringBuilder | null): StringBuilder {
        if (value === undefined || value === null) {
            return this;
        }

        if (value instanceof StringBuilder) {
            this._strings.push(...value._strings);
        } else {
            if (/^\s*$/.test(value)) {
                return this;
            }

            this._strings.push(value);
        }

        return this;
    }

    /**
     * Inserts the value to this instance at the specified index.
     * @param index The position in this instance where the value should be inserted.
     * @param value The value to insert.
     * @returns {StringBuilder} A reference to this instance after the insert operation has completed.
     */
    public insert(index: number, value: string | StringBuilder | null): StringBuilder {
        if (value === undefined || value === null) {
            return this;
        }

        if (value instanceof StringBuilder) {
            this._strings.splice(index, 0, ...value._strings);
        } else {
            if (/^\s*$/.test(value)) {
                return this;
            }

            this._strings.splice(index, 0, value);
        }

        return this;
    }

    /**
     * Replaces all occurrences of a specified string or value based on a regular expression in this instance with another specified string.
     * @param search The string or regular expression to find values to replace.
     * @param replace The string to replace values with.
     * @returns {StringBuilder} A reference to this instance after the replace operation has completed.
     */
    public replace(search: string | RegExp, replace: string): StringBuilder {
        for (let i = 0; i < this._strings.length; i++) {
            this._strings[i] = this._strings[i].replace(search, replace);
        }

        return this;
    }

    /**
     * Removes the specified range of characters from this instance.
     * @param startIndex The zero-based position in this instance where removal begins.
     * @param length The number of characters to remove.
     * @returns {StringBuilder} A reference to this instance after the remove operation has completed.
     */
    public remove(startIndex: number, length: number): void {
        this._strings.splice(startIndex, length);
    }

    /**
     * Checks whether this instance is empty.
     * @returns {boolean} True if this instance is empty; otherwise, false.
     */
    public isEmpty(): boolean {
        return this._strings.length === 0;
    }

    /**
     * Clears all strings from this instance.
     */
    public clear(): void {
        this._strings = [];
    }

    /**
     * Returns a string representation of the value of this instance with a join.
     * @returns {string} The strings with a join.
     */
    public toString(join: string): string {
        return this._strings.join(join);
    }
}
