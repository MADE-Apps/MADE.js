import { BooleanToStringValueConverter } from '../../src/converters/BooleanToStringValueConverter'

describe("when converting from boolean to string", () => {
    it("should convert true to default string (Yes)", () => {
        // Arrange
        const value = true;
        var converter = new BooleanToStringValueConverter();

        // Act
        const result = converter.convert(value);

        // Assert
        expect(result).toBe("Yes");
    });

    it("should convert false to default string (No)", () => {
        // Arrange
        const value = false;
        var converter = new BooleanToStringValueConverter();

        // Act
        const result = converter.convert(value);

        // Assert
        expect(result).toBe("No");
    });

    it("should convert back default string (Yes) to true", () => {
        // Arrange
        const value = "Yes";
        var converter = new BooleanToStringValueConverter();

        // Act
        const result = converter.convertBack(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert back default string (No) to false", () => {
        // Arrange
        const value = "No";
        var converter = new BooleanToStringValueConverter();

        // Act
        const result = converter.convertBack(value);

        // Assert
        expect(result).toBe(false);
    });

    it("should convert true to custom string (True)", () => {
        // Arrange
        const value = true;
        var converter = new BooleanToStringValueConverter("True", "False");

        // Act
        const result = converter.convert(value);

        // Assert
        expect(result).toBe("True");
    });

    it("should convert false to custom string (False)", () => {
        // Arrange
        const value = false;
        var converter = new BooleanToStringValueConverter("True", "False");

        // Act
        const result = converter.convert(value);

        // Assert
        expect(result).toBe("False");
    });

    it("should convert back custom string (True) to true", () => {
        // Arrange
        const value = "True";
        var converter = new BooleanToStringValueConverter("True", "False");

        // Act
        const result = converter.convertBack(value);

        // Assert
        expect(result).toBe(true);
    });

    it("should convert back custom string (False) to false", () => {
        // Arrange
        const value = "False";
        var converter = new BooleanToStringValueConverter("True", "False");

        // Act
        const result = converter.convertBack(value);

        // Assert
        expect(result).toBe(false);
    });
});