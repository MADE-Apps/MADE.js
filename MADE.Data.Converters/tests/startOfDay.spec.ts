import { startOfDay } from '../src'

describe("when getting start of day", () => {
    it("should return date at midnight", () => {
        // Arrange
        const date = new Date(2020, 0, 1, 12, 0, 0);

        // Act
        const result = startOfDay(date);

        // Assert
        expect(result).toEqual(new Date(2020, 0, 1, 0, 0, 0));
    });
});