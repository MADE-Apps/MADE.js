import { EmailValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = "Test";
        const validator = new EmailValidator();

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([
        ["email@example.com"],
        ["firstname.lastname@example.com"],
        ["email@subdomain.example.com"],
        ["firstname+lastname@example.com"],
        ["1234567890@example.com"],
        ["email@example-example.com"],
        ["email@example.name"]])
        ("should be valid if valid email address", (value) => {
            // Arrange
            const validator = new EmailValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([
        ["emailaddress"],
        ["#@%^%#$@#$@#.com"],
        ["Joe Bloggs <email@example.com>"],
        ["email.example.com"],
        ["email@example@example.com"],
        [".email@example.com"],
        ["email.@example.com"],
        ["email..email@example.com"],
        ["email@example.com (Joe Bloggs)"],
        ["email@example"],
        ["email@111.222.333.44444"]])
        ("should be invalid if invalid email address", (value) => {
            // Arrange
            const validator = new EmailValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});