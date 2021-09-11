/**
 * Defines an interface for a chain of objects.
 */
export default interface IChain<T> {
    /**
     * Gets the count of instances within the chain.
     * @returns The count of instances within the chain.
     */
    count(): number;

    /**
     * Concatenates the current instances in the chain with the specified instances.
     * @param {T[]} instances - The instances to chain.
     * @returns The updated chain.
     */
    with(...instances: T[]): IChain<T>;

    /**
     * Invokes a function on the chain of instances.
     * @param {(instance: T) => Promise<any>} func - The function to invoke.
     */
    invoke(func: (instance: T) => Promise<any>): void;
}
