import { toNumber } from '../../src'

describe("when converting to number", () => {
    it("should convert to number ('', 0)", () => {
        // Arrange
        const value = ''

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(0);
    });

    it("should convert to number (' ', 0)", () => {
        // Arrange
        const value = ' '

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(0);
    });

    it("should convert to number ('1', 1)", () => {
        // Arrange
        const value = '1';

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(1);
    });

    it("should convert to number ('-1', -1)", () => {
        // Arrange
        const value = '-1';

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(-1);
    });

    it("should convert to number ('1.1', 1.1)", () => {
        // Arrange
        const value = '1.1';

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(1.1);
    });

    it("should convert to number ('-1.1', -1.1)", () => {
        // Arrange
        const value = '-1.1';

        // Act
        const result = toNumber(value);

        // Assert
        expect(result).toBe(-1.1);
    });
});