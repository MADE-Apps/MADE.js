/**
 * Determines whether a string is undefined, null, or consists only of white-space characters.
 * @param {any} value - The value to check.
 * @return {boolean} True if the value is undefined, null, or consists only of white-space characters; otherwise, false.
 */
export function isNullOrWhiteSpace(value: any): boolean {
    return value === undefined || value === null || /^\s*$/.test(value);
}

/**
 * Determines whether a string contains a specified value with optional case ignorance.
 * @param {string} phrase - The phrase to check.
 * @param {string} value - The value to find.
 * @param {boolean} ignoreCase - A value indicating whether to ignore casing.
 * @return {boolean} True if the phrase contains the value; otherwise, false.
 */
export function containsString(phrase: string, value: string, ignoreCase: boolean = false): boolean {
    if (ignoreCase) {
        return phrase.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    return phrase.indexOf(value) !== -1;
}