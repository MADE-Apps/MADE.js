/**
 * Converts a degrees value to a radians value.
 * @param {number} degrees - The degrees value to convert.
 * @return {number} The converted value as radians.
 */
export function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Rounds a value, towards zero, if the remainder of dividing number by multiple is greater than or equal to half the value of multiple.
 * @param {number} number - The value to round.
 * @param {number} multiple - The multiple to which you want to round number.
 * @return {number} The number rounded to the desired multiple.
 */
export function mRound(number: number, multiple: number): number {
    if (isNaN(multiple)) {
        return 0;
    }

    multiple = Number(multiple);
    var result = number % multiple;
    if (result < 0) {
        return -mRound(-number, -multiple);
    }

    result = Number((number - result).toFixed(0));
    var compare = (multiple / 2) <= Math.abs(number - result);
    if (compare) {
        if (result < 0) {
            result -= multiple;
        } else {
            result += multiple;
        }
    }


    return result;
}
