import { update } from "../src/index";

describe("when updating an array", () => {
    it("should return true if item updated", () => {
        // Arrange
        const arr = [
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ];

        var itemToUpdate = { id: 2, name: "b2" };

        // Act
        const result = update(arr, itemToUpdate, (item) => item.id == itemToUpdate.id);

        // Assert
        expect(result).toEqual(true);
        expect(arr).toEqual([
            { id: 1, name: "a" },
            { id: 2, name: "b2" },
            { id: 3, name: "c" },
        ]);
    });

    it("should return false if item does not exist", () => {
        // Arrange
        const arr = [
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ];

        var itemToUpdate = { id: 4, name: "d" };

        // Act
        const result = update(arr, itemToUpdate, (item) => item.id == itemToUpdate.id);

        // Assert
        expect(result).toEqual(false);
        expect(arr).toEqual([
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ]);
    });
});