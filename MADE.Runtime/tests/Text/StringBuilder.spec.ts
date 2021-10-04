import { StringBuilder } from '../../src'

describe("when appending a value", () => {
    it("should accept a string value", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        builder.append("Hello");

        // Assert
        expect(builder.toString(" ")).toBe("Hello");
    });

    it("should accept a populated StringBuilder", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("Hello");

        const otherBuilder = new StringBuilder();

        // Act
        otherBuilder.append(builder);

        // Assert
        expect(otherBuilder.toString(" ")).toBe("Hello");
    });

    it("should not add a null value", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        builder.append(null);

        // Assert
        expect(builder.toString(" ")).toBe("");
    });

    it("should not add an empty string", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        builder.append("");

        // Assert
        expect(builder.toString(" ")).toBe("");
    });
});

describe("when inserting a value", () => {
    it("should accept a string value", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("World");

        // Act
        builder.insert(0, "Hello");

        // Assert
        expect(builder.toString(" ")).toBe("Hello World");
    });

    it("should accept a populated StringBuilder", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("Hello");

        const otherBuilder = new StringBuilder();
        otherBuilder.append("World");

        // Act
        otherBuilder.insert(0, builder);

        // Assert
        expect(otherBuilder.toString(" ")).toBe("Hello World");
    });

    it("should not insert a null value", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("World");

        // Act
        builder.insert(0, null);

        // Assert
        expect(builder.toString(" ")).toBe("World");
    });

    it("should not insert an empty string", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("World");

        // Act
        builder.insert(0, "");

        // Assert
        expect(builder.toString(" ")).toBe("World");
    });
});

describe("when replacing a value", () => {
    it("should replace by a string", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("World");

        // Act
        builder.replace("World", "Hello");

        // Assert
        expect(builder.toString(" ")).toBe("Hello");
    });

    it("should replace by a regular expression", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("World");

        // Act
        builder.replace(/World/g, "Hello");

        // Assert
        expect(builder.toString(" ")).toBe("Hello");
    });
});

describe("when removing by range", () => {
    it("should remove items in range", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("Hello");
        builder.append("Digital");
        builder.append("World");

        // Act
        builder.remove(1, 1);

        // Assert
        expect(builder.toString(" ")).toBe("Hello World");
    });
});

describe("when checking is empty", () => {
    it("should return true if empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        const result = builder.isEmpty();

        // Assert
        expect(result).toBe(true);
    });

    it("should return false if populated", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("Hello");

        // Act
        const result = builder.isEmpty();

        // Assert
        expect(result).toBe(false);
    });
});

describe("when clearing", () => {
    it("should be empty", () => {
        // Arrange
        const builder = new StringBuilder();
        builder.append("Hello");
        builder.append("World");

        // Act
        builder.clear();

        // Assert
        expect(builder.isEmpty()).toBe(true);
    });
});
