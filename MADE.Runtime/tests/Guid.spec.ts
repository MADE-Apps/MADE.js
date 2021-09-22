import { Guid } from '../src/Guid'

describe("when creating a Guid", () => {
    it("should create a new Guid", () => {
        // Arrange & Act
        var guid = Guid.newGuid();

        // Assert
        expect(guid).toBeDefined();
        expect(guid).not.toBe(Guid.empty);
    });

    it("should create a Guid from a string", () => {
        // Arrange
        var guidStr = "9d0e4ab7-6cce-4ad2-afd1-25f0e9800937";

        // Act
        var guid = new Guid(guidStr);

        // Assert
        expect(guid).toBeDefined();
        expect(guid).not.toBe(Guid.empty);
    });
});

describe("when checking Guid equality", () => {
    it("should return true when comparing two equal Guids", () => {
        // Arrange
        var guid1 = Guid.newGuid();
        var guid2 = new Guid(guid1.toString());

        // Act
        var result = guid1.equals(guid2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when comparing two different Guids", () => {
        // Arrange
        var guid1 = Guid.newGuid();
        var guid2 = Guid.newGuid();

        // Act
        var result = guid1.equals(guid2);

        // Assert
        expect(result).toBe(false);
    });
});
