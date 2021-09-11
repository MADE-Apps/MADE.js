import { isNullOrWhiteSpace } from '../../src'

describe("when determining if a value is null or white-space", () => {
    it("should return true if the value is null", () => {
        // Arrange
        const value = null

        // Act
        const result = isNullOrWhiteSpace(value)

        // Assert
        expect(result).toBe(true)
    });

    it("should return true if the value is undefined", () => {
        // Arrange
        const value = undefined

        // Act
        const result = isNullOrWhiteSpace(value)

        // Assert
        expect(result).toBe(true)
    });

    it("should return true if the value is an empty string", () => {
        // Arrange
        const value: string = ""

        // Act
        const result = isNullOrWhiteSpace(value)

        // Assert
        expect(result).toBe(true)
    });

    it("should return true if the value is a string of white-space characters", () => {
        // Arrange
        const value: string = " \t\r\n"
        
        // Act
        const result = isNullOrWhiteSpace(value)

        // Assert
        expect(result).toBe(true)
    });

    it("should return false if the value is a non-empty string", () => {
        // Arrange
        const value: string = "a"

        // Act
        const result = isNullOrWhiteSpace(value)

        // Assert
        expect(result).toBe(false)
    });
});