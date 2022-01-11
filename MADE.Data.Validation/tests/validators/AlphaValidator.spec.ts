import { AlphaValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = "Test";
        const validator = new AlphaValidator();

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([["Test"]])
        ("should be valid if contains alpha characters", (value) => {
            // Arrange
            const validator = new AlphaValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([["Test1"], ["Test!"]])
        ("should be invalid if contains non alpha characters", (value) => {
            // Arrange
            const validator = new AlphaValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});