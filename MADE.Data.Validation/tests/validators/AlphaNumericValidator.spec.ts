import { AlphaNumericValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = "Test";
        const validator = new AlphaNumericValidator();

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([["Test"], ["Test1"]])
        ("should be valid if contains alpha numeric characters", (value) => {
            // Arrange
            const validator = new AlphaNumericValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([["Test!"]])
        ("should be invalid if contains non alpha numeric characters", (value) => {
            // Arrange
            const validator = new AlphaNumericValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});