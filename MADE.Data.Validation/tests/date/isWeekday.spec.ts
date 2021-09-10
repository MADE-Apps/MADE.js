import { isWeekday } from '../../src'

describe("when determining if date is a weekday", () => {
    it("should be true if weekday", () => {
        // Arrange
        const date = new Date('05/10/2021')

        // Act
        const result = isWeekday(date)

        // Assert
        expect(result).toBe(true)
    });

    it("should be false if not weekday", () => {
        // Arrange
        const date = new Date('05/15/2021')

        // Act
        const result = isWeekday(date)

        // Assert
        expect(result).toBe(false)
    });
});