/**
 * Updates an item within the array, if the item exists.
 * @param {T[]} array - The array to update the item in.
 * @param {T} item - The item to update.
 * @param {(item: T) => boolean} predicate - The function to find the item within the array.
 * @return {boolean} True if the item was updated; otherwise, false.
 */
export function update<T>(array: T[], item: T, predicate: (item: T) => boolean): boolean {
    const index = array.findIndex(predicate);
    if (index === -1) {
        return false;
    }
    array[index] = item;
    return true;
}

/**
 * Makes the given destination array items equal to the items in the given source array.
 * @param {T[]} destination - The destination array to make equal to the source.
 * @param {T[]} source - The source array to provide the items.
 * @return {T[]} The updated destination array.
 */
export function makeEqualTo<T>(destination: T[], source: T[]): T[] {
    destination.length = 0;
    source.forEach(item => destination.push(item));
    return destination;
}

/**
 * Adds an array of items to another.
 * @param {T[]} destination - The destination array to add items from the source to.
 * @param {T[]} itemsToAdd - The source array items to add.
 * @return {T[]} The updated destination array.
 */
export function addRange<T>(destination: T[], itemsToAdd: T[]): T[] {
    itemsToAdd.forEach(item => destination.push(item));
    return destination;
}

/**
 * Removes an array of existing items from another.
 * @param {T[]} destination - The destination array to remove items from.
 * @param {T[]} itemsToAdd - The source array items to remove that should exist in the destination array.
 * @return {T[]} The updated destination array.
 */
export function removeRange<T>(destination: T[], itemsToRemove: T[]): T[] {
    itemsToRemove.forEach(item => destination.splice(destination.indexOf(item), 1));
    return destination;
}

/**
 * Determines whether two arrays are equivalent, containing all the same items with no regard to order.
 * @param {T[]} expected - The array of expected items.
 * @param {T[]} actual - The array of actual items.
 * @return {boolean} True if the arrays are equivalent; otherwise, false.
 */
export function areEquivalent<T>(expected: T[], actual: T[]): boolean {
    var result = (expected == null && actual == null)
        || (expected != null && actual != null &&
            expected.length == actual.length);

    if (result) {
        expected.forEach(e => {
            if (!actual.includes(e)) {
                result = false;
            }
        });
    }

    return result;
}

export function takeFromIndex<T>(array: T[], startIndex: number, count: number): T[] {
    const result = new Array<T>();
    for (let i = 0; i < count; i++) {
        if (startIndex + i < array.length) {
            result.push(array[startIndex + i]);
        }
    }
    return result;
}