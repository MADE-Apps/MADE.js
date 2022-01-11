import { AlphaValidator, RequiredValidator, ValidatorArray } from "../../src";

describe("when initializing", () => {
    it("should be empty if default constructor", () => {
        // Act
        var validators = new ValidatorArray();

        // Assert
        expect(validators.length).toBe(0);
    })

    it("should contain items if initialized with array", () => {
        // Act
        var validators = new ValidatorArray(() => { }, new AlphaValidator(), new RequiredValidator());

        // Assert
        expect(validators.length).toBe(2);
    })
});

describe("when validating", () => {
    it("should be dirty once validated", () => {
        // Arrange
        var value = "Hello";

        var validators = new ValidatorArray(() => { }, new AlphaValidator(), new RequiredValidator());

        // Act
        validators.validate(value);

        // Assert
        expect(validators.isDirty()).toBe(true);
    })

    it("should be invalid if invalid value", () => {
        // Arrange
        var value = "";

        var validators = new ValidatorArray(() => { }, new AlphaValidator(), new RequiredValidator());

        // Act
        validators.validate(value);

        // Assert
        expect(validators.isInvalid()).toBe(true);
    })
});