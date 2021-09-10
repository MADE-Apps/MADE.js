import { toRadians } from '../../src'

describe("when converting to radians", () => {
    it("should convert to radians (0, 0)", () => {
        // Arrange
        const degrees = 0;

        // Act
        const radians = toRadians(degrees);

        // Assert
        expect(radians).toBe(0);
    });

    it("should convert to radians (90, PI/2)", () => {
        // Arrange
        const degrees = 90;

        // Act
        const radians = toRadians(degrees);

        // Assert
        expect(radians).toBe(Math.PI / 2);
    });


    it("should convert to radians (180, PI)", () => {
        // Arrange
        const degrees = 180;

        // Act
        const radians = toRadians(degrees);

        // Assert
        expect(radians).toBe(Math.PI);
    });

    it("should convert to radians (360, PI*2)", () => {
        // Arrange
        const degrees = 360;

        // Act
        const radians = toRadians(degrees);

        // Assert
        expect(radians).toBe(Math.PI * 2);
    });
});