import { setTime } from '../../src'

describe("when setting the time of a date", () => {
    it("should set date", () => {
        // Arrange
        const date = new Date(2020, 1, 1, 0, 0, 0, 0);
        const expectedHour = 9;
        const expectedMinute = 10;
        const expectedSecond = 30;
        const expectedMillisecond = 10;

        // Act
        const result = setTime(date, expectedHour, expectedMinute, expectedSecond, expectedMillisecond);

        // Assert
        expect(result.getHours()).toBe(expectedHour);
        expect(result.getMinutes()).toBe(expectedMinute);
        expect(result.getSeconds()).toBe(expectedSecond);
        expect(result.getMilliseconds()).toBe(expectedMillisecond);
    });
});