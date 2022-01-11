import { BetweenValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = 1;
        const validator = new BetweenValidator(0, 2);

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([[0, 0, 2], [1, 0, 2], [2, 0, 2]])
        ("should be valid if value within range", (value, min, max) => {
            // Arrange
            const validator = new BetweenValidator(min, max);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([[-1, 0, 2], [3, 0, 2]])
        ("should be invalid if value outside range", (value, min, max) => {
            // Arrange
            const validator = new BetweenValidator(min, max);

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});