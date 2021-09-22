import { Chain } from '../src/Chain'

describe("when creating a Chain", () => {
    it("should initialize with instances", () => {
        // Arrange
        const chain = new Chain(1, 2, 3);

        // Act & Assert
        expect(chain.count()).toBe(3);
    });
});

describe("when chaining instances in a Chain", () => {
    it("should add instances to the chain", () => {
        // Arrange
        const chain = new Chain(1, 2, 3);

        // Act
        chain.with(4, 5, 6);

        // Assert
        expect(chain.count()).toBe(6);
    });
});

describe("when invoking an action on a Chain", () => {
    it("should invoke the action on each instance", () => {
        // Arrange
        const chain = new Chain(1, 2, 3);
        const action = jest.fn();

        // Act
        chain.invoke(action);

        // Assert
        expect(action).toHaveBeenCalledTimes(3);
    });
});