/**
 * Truncates a string value to the specified length with an ellipsis.
 * @param {string} value - The value to truncate.
 * @param {number} maxLength - The maximum length of the value.
 * @return {string} A truncated string with ellipsis if the value's length is greater than the max length.
 */
export function truncate(value: string, maxLength: number): string {
    if (isNullOrWhiteSpace(value) || value.length <= maxLength) {
        return value;
    }

    const suffix = "...";
    return value.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Converts a string value to a number value.
 * @param {string} value - The string value to convert.
 * @return {number} The converted value as a number.
 */
export function toNumber(value: string): number {
    if (isNullOrWhiteSpace(value)) {
        return 0;
    }

    return value.match(/^[-+]?[0-9]*\.?[0-9]+$/)
        ? parseFloat(value)
        : 0;
}

/**
 * Converts a string value to a boolean value.
 * @param {string} value - The string value to convert.
 * @return {boolean} The converted value as a boolean.
 */
export function toBoolean(value: string): boolean {
    if (isNullOrWhiteSpace(value)) {
        return false;
    }

    return value === 'true' || value === '1' || value === 'on' || value === 'checked' || value === 'selected' || value === 'yes';
};

/**
 * Reverses a string value.
 * @param {string} value - The string value to reverse.
 * @return {string} The reversed string value.
 */
export function reverseString(value: string): string {
    return value.split('').reverse().join('');
}

function isNullOrWhiteSpace(value: string): boolean {
    return value === null || value.match(/^ *$/) !== null;
}