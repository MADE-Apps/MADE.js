import { takeFromIndex } from "../src/index";

describe("when taking items from index with count", () => {
    it("should return subset of items", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        var result = takeFromIndex(items, 2, 2);

        // Assert
        expect(result).toEqual([3, 4]);
    });

    it("should return subset of items (only in array length)", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        var result = takeFromIndex(items, 2, 10);

        // Assert
        expect(result).toEqual([3, 4, 5]);
    });
});