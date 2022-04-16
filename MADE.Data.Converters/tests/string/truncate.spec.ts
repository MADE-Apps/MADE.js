import { truncate } from '../../src'

describe("when truncating a string", () => {
    it("should return a truncated string if greater than max length", () => {
        // Arrange
        const input = "Hello, World!"

        // Act
        const result = truncate(input, 8);

        // Assert
        expect(result).toBe("Hello...");
    });

    it("should return original string if less than max length", () => {
        // Arrange
        const input = "Hello, World!"

        // Act
        const result = truncate(input, input.length);

        // Assert
        expect(result).toBe(input);
    });
});