import { addRange } from "./index";

describe("when adding range of items", () => {
    it("should add range of items", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        addRange(items, [6, 7, 8]);

        // Assert
        expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});