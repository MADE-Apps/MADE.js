import { MaxValueValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = 1;
        const validator = new MaxValueValidator(0);

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([[0, 1], [1, 1]])
        ("should be valid if value below max", (value, max) => {
            // Arrange
            const validator = new MaxValueValidator(max);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([[2, 1]])
        ("should be invalid if value above max", (value, max) => {
            // Arrange
            const validator = new MaxValueValidator(max);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});