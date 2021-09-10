/**
 * Converts a degrees value to a radians value.
 * @param {number} degrees - The degrees value to convert.
 * @return {number} The converted value as radians.
 */
export function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}