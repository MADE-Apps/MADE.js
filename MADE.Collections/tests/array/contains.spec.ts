import { contains } from "../../src";

describe("when determining if array contains an item", () => {
    it("should return true if the item exists", () => {
        // Arrange
        const array = [1, 2, 3];

        // Act
        const result = contains(array, x => x === 2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false if the item does not exist", () => {
        // Arrange
        const array = [1, 2, 3];

        // Act
        const result = contains(array, x => x === 4);

        // Assert
        expect(result).toBe(false);
    });
});