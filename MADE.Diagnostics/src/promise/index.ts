/**
 * Creates a Promise that completes after a specified number of milliseconds.
 * @param {number} milliseconds - The number of milliseconds to wait before completing the returned Promise.
 * @returns {Promise} A new Promise that is completed after the specified number of milliseconds.
 */
export function delay(milliseconds: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}