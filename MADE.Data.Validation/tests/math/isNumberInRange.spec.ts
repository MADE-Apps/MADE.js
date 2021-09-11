import { isNumberInRange } from '../../src'

describe("when determining if a number is in a valid range", () => {
    it("should be true if in range", () => {
        // Arrange
        const number = 1
        const min = 0
        const max = 2

        // Act
        const result = isNumberInRange(number, min, max)

        // Assert
        expect(result).toBe(true)
    });

    it("should be false if not in range", () => {
        // Arrange
        const number = 3
        const min = 0
        const max = 2

        // Act
        const result = isNumberInRange(number, min, max)

        // Assert
        expect(result).toBe(false)
    });
});