/**
 * Defines an interface with a method for determining equality of instances of a type.
 */
export default interface IEquatable<T> {
    /**
     * Returns a value indicating whether this instance and a specified object represent the same value.
     * @param {T} other - Another instance to compare to this instance.
     * @returns {boolean} True if the other instance is equal to this instance; otherwise, false.
     */
    equals(other: T): boolean;
}
