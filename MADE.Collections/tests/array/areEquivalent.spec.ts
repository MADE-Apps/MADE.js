import { areEquivalent } from "../src/index";

describe("when determining if arrays are equivalent", () => {
    it("should return true if equivalent (in order)", () => {
        // Arrange
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];

        // Act
        const result = areEquivalent(array1, array2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true if equivalent (out of order)", () => {
        // Arrange
        const array1 = [1, 2, 3];
        const array2 = [3, 1, 2];

        // Act
        const result = areEquivalent(array1, array2);

        // Assert
        expect(result).toBe(true);
    });


    it("should return false if not equivalent (some match)", () => {
        // Arrange
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 4];

        // Act
        const result = areEquivalent(array1, array2);

        // Assert
        expect(result).toBe(false);
    });

    it("should return false if not equivalent (too many items)", () => {
        // Arrange
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3, 4];

        // Act
        const result = areEquivalent(array1, array2);

        // Assert
        expect(result).toBe(false);
    });

});