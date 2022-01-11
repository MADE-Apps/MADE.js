import { isNullOrWhiteSpace } from "..";

/**
 * Determines whether a value contains only alphanumeric characters.
 * @param value - The value.
 * @return {boolean} True if the value contains only alphanumeric; otherwise, false.
 */
export function isAlphaNumeric(value: object | string): boolean {
    var str = value?.toString() ?? "";
    return /^[a-zA-Z0-9]*$/.test(str);
}

/**
 * Determines whether a value contains only alpha characters.
 * @param value - The value.
 * @return {boolean} True if the value contains only alpha; otherwise, false.
 */
export function isAlpha(value: object | string): boolean {
    var str = value?.toString() ?? "";
    return /^[a-zA-Z]*$/.test(str);
}

/**
 * Determines whether a value is a valid email address.
 * @param value - The value.
 * @return {boolean} True if the value is a valid email address; otherwise, false.
 */
export function isEmail(value: object | string): boolean {
    var str = value?.toString() ?? "";
    return /^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|" + @"([-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)" + @"@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$/.test(str);
}

/**
 * Determines whether a value is a valid IP address.
 * @param value - The value.
 * @return {boolean} True if the value is a valid IP address; otherwise, false.
 */
export function isIpAddress(value: object | string): boolean {
    function isValidNibble(nibble: string): boolean {
        if (nibble.length > 3 || nibble.length == 0) {
            return false;
        }

        if (nibble[0] == '0' && nibble != "0") {
            return false;
        }

        if (!(/^\d+$/.test(nibble))) {
            return false;
        }

        var n = parseInt(nibble);
        return n >= 0 && n <= 255;
    }

    var str = value?.toString() ?? "";
    var nibbles = str.split('.');
    return nibbles.length == 4 && nibbles.every(isValidNibble);
}

/**
 * Determines whether a value is less than a maximum length. When this is an array, it checks the count of items.
 * @param value - The value.
 * @param orEqualTo - A value indicating whether to check if the length is equal to or less than the maximum length.
 * @return {boolean} True if the value is less than the maximum length; otherwise, false.
 */
export function isLengthLessThan(value: object | [] | number | string, max: number, orEqualTo: boolean = false): boolean {
    if (value instanceof Array) {
        return orEqualTo ? value.length <= max : value.length < max;
    } else if (typeof value == "number") {
        return orEqualTo ? value <= max : value < max;
    }

    var str = value?.toString() ?? "";
    return orEqualTo ? str.length <= max : str.length < max;
}

/**
 * Determines whether a value is greater than a minimum length. When this is an array, it checks the count of items.
 * @param value - The value.
 * @param orEqualTo - A value indicating whether to check if the length is equal to or greater than the minimum length.
 * @return {boolean} True if the value is greater than the minimum length; otherwise, false.
 */
export function isLengthGreaterThan(value: object | [] | number | string, min: number, orEqualTo: boolean = false): boolean {
    if (value instanceof Array) {
        return orEqualTo ? value.length >= min : value.length > min;
    } else if (typeof value == "number") {
        return orEqualTo ? value >= min : value > min;
    }

    var str = value?.toString() ?? "";
    return orEqualTo ? str.length >= min : str.length > min;
}

/**
 * Determines whether a value is less than a maximum value.
 * @param value - The value.
 * @param orEqualTo - A value indicating whether to check if the value is equal to or less than the maximum value.
 * @return {boolean} True if the value is less than the maximum value; otherwise, false.
 */
export function isLessThan(value: object | number, max: number, orEqualTo: boolean = false): boolean {
    if (typeof value == "number") {
        return orEqualTo ? value <= max : value < max;
    }

    var int = parseInt(value?.toString() ?? "");
    return orEqualTo ? int <= max : int < max;
}

/**
 * Determines whether a value is greater than a minimum value.
 * @param value - The value.
 * @param orEqualTo - A value indicating whether to check if the value is equal to or greater than the minimum value.
 * @return {boolean} True if the value is greater than the minimum value; otherwise, false.
 */
export function isGreaterThan(value: object | number | string, min: number, orEqualTo: boolean = false): boolean {
    if (typeof value == "number") {
        return orEqualTo ? value >= min : value > min;
    }

    var int = parseInt(value?.toString() ?? "");
    return orEqualTo ? int >= min : int > min;
}

/**
 * Determines whether a value is set.
 * @param value - The value.
 * @return {boolean} True if the value is set and has a value; otherwise, false.
 */
export function hasValue(value: object | [] | boolean): boolean {
    if (value == null || value == undefined) {
        return false;
    }

    if (value == false) {
        return false;
    }

    if (value instanceof Array) {
        return value.length > 0;
    }

    if (typeof value == "string") {
        return !isNullOrWhiteSpace(value);
    }

    return true;
}