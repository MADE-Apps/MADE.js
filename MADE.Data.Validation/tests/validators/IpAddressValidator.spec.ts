import { IpAddressValidator } from "../../src";

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = "Test";
        const validator = new IpAddressValidator();

        // Act
        validator.validate(value);

        // Assert
        expect(validator.isDirty).toBe(true);
    })

    test.each([
        ["127.0.0.1"],
        ["8.8.8.8"],
        ["123.41.12.168"],
        ["10.0.0.1"],
        ["10.0.0.0"]])
        ("should be valid if valid IP address", (value) => {
            // Arrange
            const validator = new IpAddressValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(false);
        });

    test.each([
        ["Test"],
        ["123123123123"],
        [" 127.0.0.1 "],
        ["127.0.00.1"],
        ["127.0.1"],
        ["10.0.1.2.3"],
        ["1.2.3.-4"],
        ["1.256.3.4"],
        ["10.0.0.1/24"]])
        ("should be invalid if invalid IP address", (value) => {
            // Arrange
            const validator = new IpAddressValidator();

            // Act
            validator.validate(value);

            // Assert
            expect(validator.isInvalid).toBe(true);
        })
});