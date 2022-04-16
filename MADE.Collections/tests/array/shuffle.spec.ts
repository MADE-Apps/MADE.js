import { shuffle } from "../../src";

describe("when shuffling items", () => {
    it("should shuffle item order randomly", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        var shuffled = shuffle(items);

        // Assert
        expect(shuffled).not.toEqual([1, 2, 3, 4, 5]);
    });

    it("should contain same items after shuffle", () => {
        // Arrange
        const items = [1, 2, 3, 4, 5];

        // Act
        var shuffled = shuffle(items);

        // Assert
        expect(shuffled).toContain(1);
        expect(shuffled).toContain(2);
        expect(shuffled).toContain(3);
        expect(shuffled).toContain(4);
        expect(shuffled).toContain(5);
    });
});