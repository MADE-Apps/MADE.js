import { toDaySuffix } from '../../src'

describe("when converting date to day suffix", () => {
    test.each([
        [new Date(2022, 3, 1, 9, 0, 0, 0), "st"],
        [new Date(2022, 3, 2, 9, 0, 0, 0), "nd"],
        [new Date(2022, 3, 3, 9, 0, 0, 0), "rd"],
        [new Date(2022, 3, 4, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 5, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 6, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 7, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 8, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 9, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 10, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 11, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 12, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 13, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 14, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 15, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 16, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 17, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 18, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 19, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 20, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 21, 9, 0, 0, 0), "st"],
        [new Date(2022, 3, 22, 9, 0, 0, 0), "nd"],
        [new Date(2022, 3, 23, 9, 0, 0, 0), "rd"],
        [new Date(2022, 3, 24, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 25, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 26, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 27, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 28, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 29, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 30, 9, 0, 0, 0), "th"],
        [new Date(2022, 3, 31, 9, 0, 0, 0), "st"],
    ])
        ("should return correct suffix for date (date - %s, suffix - %s)", (date, expectedSuffix) => {
            // Act
            const result = toDaySuffix(date);

            // Assert
            expect(result).toBe(expectedSuffix);
        });
});