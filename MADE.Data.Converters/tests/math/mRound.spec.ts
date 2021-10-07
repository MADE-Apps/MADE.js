import { mRound } from '../../src'

describe("when rounding to the nearest multiple", () => {
    test.each([
        [10, 3, 9],
        [-10, -3, -9],
        [1.3, 0.2, 1.2],
    ])(
        "should round to the nearest multiple of the given number",
        (value, multiple, expected) => {
            expect(mRound(value, multiple)).toBe(expected)
        }
    )
});