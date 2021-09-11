import { makeEqualTo } from "../../src";

describe("when making an array equal to another", () => {
    it("should update array to be equal to other", () => {
        // Arrange
        const array = [1, 2, 3];

        // Act
        makeEqualTo(array, [4, 5, 6]);

        // Assert
        expect(array).toEqual([4, 5, 6]);
    });
});