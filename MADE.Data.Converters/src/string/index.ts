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