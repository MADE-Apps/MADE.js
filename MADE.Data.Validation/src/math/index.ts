/**
 * Determines whether a number is close to another in value.
 * @param {number} a - The value.
 * @param {number} b - The value to compare with.
 * @param {number} epsilon - The value that determines how close the values should be.
 * @return {boolean} True if the values are close; otherwise, false.
 */
export function isNumberCloseTo(a: number, b: number, epsilon: number = 2.2204460492503131E-16): boolean {
    return Math.abs(a - b) < epsilon;
}

/**
 * Determines whether a number is within a valid range.
 * @param {number} value - The number to check.
 * @param {number} lower - The lower bound of the range.
 * @param {number} upper - The upper bound of the range.
 * @return {boolean} True if the value is in the range; otherwise, false.
 */
 export function isNumberInRange(value: number, lower: number, upper: number): boolean {
    return value >= lower && value <= upper;
}