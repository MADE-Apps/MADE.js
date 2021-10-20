import { remove } from "../../src";

describe("when remove items from an array", () => {
    it("should return true if existing item removed", () => {
        // Arrange
        const array = [1, 2, 3, 4, 5];

        // Act
        const result = remove(array, x => x == 2);

        // Assert
        expect(result).toBe(true);
        expect(array).toEqual([1, 3, 4, 5]);
    });

    it("should return false if item does not exist", () => {
        // Arrange
        const array = [1, 2, 3, 4, 5];

        // Act
        const result = remove(array, x => x == 6);

        // Assert
        expect(result).toBe(false);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});