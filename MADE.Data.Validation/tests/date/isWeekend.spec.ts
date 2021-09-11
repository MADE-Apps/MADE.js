import { isWeekend } from '../../src'

describe("when determining if date is a weekend", () => {
    it("should be true if weekend", () => {
        // Arrange
        const date = new Date('05/15/2021')

        // Act
        const result = isWeekend(date)

        // Assert
        expect(result).toBe(true)
    });

    it("should be false if not weekend", () => {
        // Arrange
        const date = new Date('05/10/2021')

        // Act
        const result = isWeekend(date)

        // Assert
        expect(result).toBe(false)
    });
});