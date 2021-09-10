import { toNearestHour } from '../src'

describe("when converting date to nearest hour", () => {
    it("should round up if after half hour", () => {
        // Arrange
        const expectedHour = 10;
        const date = new Date(2021, 5, 12, 9, 31, 0);

        // Act
        const result = toNearestHour(date);

        // Assert
        expect(result.getHours()).toBe(expectedHour);
    });

    it("should round down if before half hour", () => {
        // Arrange
        const expectedHour = 9;
        const date = new Date(2021, 5, 12, 9, 29, 0);

        // Act
        const result = toNearestHour(date);

        // Assert
        expect(result.getHours()).toBe(expectedHour);
    });
});