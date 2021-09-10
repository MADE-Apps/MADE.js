import { toBoolean } from '../../src'

describe("when converting to boolean", () => {
    it("should convert to boolean ('', false)", () => {
        // Arrange
        const value = ''

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert to boolean (' ', false)", () => {
        // Arrange
        const value = ' '

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert to boolean ('false', false)", () => {
        // Arrange
        const value = 'false'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert to boolean ('0', false)", () => {
        // Arrange
        const value = '0'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert to boolean ('no', false)", () => {
        // Arrange
        const value = 'no'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert to boolean ('true', true)", () => {
        // Arrange
        const value = 'true'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert to boolean ('1', true)", () => {
        // Arrange
        const value = '1'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert to boolean ('checked', true)", () => {
        // Arrange
        const value = 'checked'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert to boolean ('selected', true)", () => {
        // Arrange
        const value = 'selected'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert to boolean ('on', true)", () => {
        // Arrange
        const value = 'on'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert to boolean ('yes', true)", () => {
        // Arrange
        const value = 'yes'

        // Act
        const result = toBoolean(value);

        // Assert
        expect(result).toBe(true);
    });
});