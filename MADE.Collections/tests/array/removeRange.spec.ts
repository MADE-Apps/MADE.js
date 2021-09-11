import { removeRange } from "../src/index";

describe("when removing range of items", () => {
    it("should remove range of items", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        removeRange(items, [1, 2]);

        // Assert
        expect(items).toEqual([3, 4, 5]);
    });
});