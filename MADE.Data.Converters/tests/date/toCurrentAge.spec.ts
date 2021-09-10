import { toCurrentAge } from '../../src'

describe("when converting date to current age", () => {
    it("should return correct age (18 years ago today)", () => {
        // Arrange
        const expectedAge = 18;
        const date = new Date();
        const birthDate = new Date(date.getFullYear() - expectedAge, date.getMonth(), date.getDay());

        // Act
        const age = toCurrentAge(birthDate);

        // Assert
        expect(age).toBe(expectedAge);
    });
});