import { potentialIndexOf } from "../../src";

describe("when determining the potential index of an item in an array", () => {
    it("should return correct index based on predicate", () => {
        // Arrange
        const array = [{ name: 'app' }, { name: 'file' }, { name: 'input' }];

        // Act
        const result = potentialIndexOf(array, { name: 'banana' }, (value, compare) => compare.name <= value.name);

        // Assert
        expect(result).toBe(1);
    });
});