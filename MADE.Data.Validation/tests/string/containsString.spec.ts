import { containsString } from '../../src'

describe("when determining if a string value contains another", () => {
    it("should return true if the value contains another matching case", () => {
        // Arrange
        const phrase = "Hello World"
        const value = "ello"

        // Act
        const result = containsString(phrase, value)

        // Assert
        expect(result).toBe(true)
    });

    it("should return false if the value does not contain another matching case", () => {
        // Arrange
        const phrase = "Hello World"
        const value = "world"

        // Act
        const result = containsString(phrase, value)

        // Assert
        expect(result).toBe(false)
    });

    it("should return true if the value contains another regardless of case", () => {
        // Arrange
        const phrase = "Hello World"
        const value = "eLLo"

        // Act
        const result = containsString(phrase, value, true);

        // Assert
        expect(result).toBe(true)
    });

    it("should return false if the value does not contain another regardless of case", () => {
        // Arrange
        const phrase = "Hello World"
        const value = "wold"

        // Act
        const result = containsString(phrase, value, true);

        // Assert
        expect(result).toBe(false)
    });
});