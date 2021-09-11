import { isDateInRange } from '../../src'

describe("when determining if a date is in a valid range", () => {
    it("should be true if in range", () => {
        // Arrange
        const date = new Date('07/01/2021')
        const from = new Date('01/01/2021')
        const to = new Date('12/31/2021')

        // Act
        const result = isDateInRange(date, from, to)

        // Assert
        expect(result).toBe(true)
    });

    it("should be false if not in range", () => {
        // Arrange
        const date = new Date('07/01/2021')
        const from = new Date('01/01/2020')
        const to = new Date('12/31/2020')

        // Act
        const result = isDateInRange(date, from, to)

        // Assert
        expect(result).toBe(false)
    });
});