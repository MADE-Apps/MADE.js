import { endOfDay } from '../src'

describe("when getting end of day", () => {
    it("should return date at just before midnight", () => {
        // Arrange
        const date = new Date(2020, 0, 1, 12, 0, 0);

        // Act
        const result = endOfDay(date);

        // Assert
        expect(result).toEqual(new Date(2020, 0, 1, 23, 59, 59, 999));
    });
});