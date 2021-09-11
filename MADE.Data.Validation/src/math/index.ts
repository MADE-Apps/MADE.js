/**
 * Determines whether a number is close to another in value.
 * @param {number} a - The value.
 * @param {number} b - The value to compare with.
 * @param {number} epsilon - The value that determines how close the values should be.
 * @return {boolean} True if the values are close; otherwise, false.
 */
export function isCloseTo(a: number, b: number, epsilon: number = 2.2204460492503131E-16): boolean {
    return Math.abs(a - b) < epsilon;
}
