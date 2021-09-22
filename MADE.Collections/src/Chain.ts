import { IChain } from "./IChain";

/**
 * Defines a chain for instances of objects.
 */
export class Chain<T> implements IChain<T> {
    private _instances: T[] = [];

    constructor(...instances: T[]) {
        this.with(...instances);
    }

    count(): number {
        return this._instances.length;
    }

    with(...instances: T[]): IChain<T> {
        this._instances.push(...instances);
        return this;
    }

    invoke(func: (instance: T) => Promise<any>): void {
        this._instances.forEach(async instance => await func(instance));
    }
}
