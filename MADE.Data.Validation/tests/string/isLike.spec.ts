import { isLike } from '../../src'

describe("when validating if a string is like", () => {
    test.each([
        ["*", "abc", true],
        ["a*", "abc", true],
        ["a?c", "abc", true],
        ["[a-z][a-z][a-z]", "abc", true],
        ["###", "123", true],
        ["###", "abc", false],
        ["*###", "123abc", false],
        ["[a-z][a-z][a-z]", "ABC", false],
        ["a?c", "aba", false],
    ])("should match pattern (pattern - %s, input - %s, expected - %s)", (pattern, input, expected) => {
        // Act
        const actual = isLike(input, pattern);

        // Assert
        expect(actual).toBe(expected)
    });
});