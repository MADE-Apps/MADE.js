import { reverseString } from '../../src'

describe("when reversing a string", () => {
    it("should return the reversed string", () => {
        // Arrange
        const input = "Hello, World!"

        // Act
        const result = reverseString(input);

        // Assert
        expect(result).toBe("!dlroW ,olleH");
    });
});