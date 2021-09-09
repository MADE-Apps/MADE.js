import { chunk } from "../src/index";

describe("when chunking items", () => {
    it("should chunk into size", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        var result = chunk(items, 2)

        // Assert
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });
});