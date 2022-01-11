import { MinValueValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = 1;
        const validator = new MinValueValidator(0);

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([[0, 0], [1, 0]])
        ("should be valid if value above min", (value, min) => {
            // Arrange
            const validator = new MinValueValidator(min);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([[-1, 0]])
        ("should be invalid if value below min", (value, min) => {
            // Arrange
            const validator = new MinValueValidator(min);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});