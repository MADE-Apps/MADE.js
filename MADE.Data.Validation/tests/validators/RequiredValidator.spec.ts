import { RequiredValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = 1;
        const validator = new RequiredValidator();

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    it("should not validate empty string", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate("");

        // Assert
        expect(validator.isInvalid).toBe(true);
    })

    it("should validate string with characters", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate("Hello, World");

        // Assert
        expect(validator.isInvalid).toBe(false);
    })

    it("should not validate empty collection", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate([]);

        // Assert
        expect(validator.isInvalid).toBe(true);
    })

    it("should validate populated collection", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate(["Hello", "World"]);

        // Assert
        expect(validator.isInvalid).toBe(false);
    })

    it("should not validate null object", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate(null);

        // Assert
        expect(validator.isInvalid).toBe(true);
    })

    it("should validate initialized object", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate({});

        // Assert
        expect(validator.isInvalid).toBe(false);
    })

    it("should not validate false", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate(false);

        // Assert
        expect(validator.isInvalid).toBe(true);
    })

    it("should validate true", () => {
        // Arrange
        const validator = new RequiredValidator();

        // Act
        validator.validate(true);

        // Assert
        expect(validator.isInvalid).toBe(false);
    })
});