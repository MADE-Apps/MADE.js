import { isCloseTo } from '../../src'

describe("when determining if a number is close to another", () => {
    it("should be true if numbers are close", () => {
        // Arrange
        const a = 0.00000005;
        const b = 0.0000000500000001;

        // Act
        const result = isCloseTo(a, b)

        // Assert
        expect(result).toBe(true)
    });

    it("should be false if numbers are not close", () => {
        // Arrange
        const a = 0.00000005;
        const b = 0.000000051;

        // Act
        const result = isCloseTo(a, b)

        // Assert
        expect(result).toBe(false)
    });
});