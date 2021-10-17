import { Uri } from '../src'

describe("when constructing Uri", () => {
    it("should return absolute path", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.absolutePath;

        // Assert
        expect(result).toBe(path)
    });

    it("should return absolute uri", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.absoluteUri;

        // Assert
        expect(result).toBe(path)
    });

    it("should return authority", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.authority;

        // Assert
        expect(result).toBe("www.jamescroft.co.uk")
    });

    it("should return authority with port", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk:8080/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.authority;

        // Assert
        expect(result).toBe("www.jamescroft.co.uk:8080")
    });

    it("should return fragment part", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/#heading-one"
        const uri = new Uri(path)

        // Act
        const result = uri.fragment;

        // Assert
        expect(result).toBe("heading-one")
    });

    it("should return host", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.host;

        // Assert
        expect(result).toBe("www.jamescroft.co.uk")
    });

    it("should return host with port", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk:8080/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.host;

        // Assert
        expect(result).toBe("www.jamescroft.co.uk:8080")
    });

    it("should return query string", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team?page=1&pageSize=25"
        const uri = new Uri(path)

        // Act
        const result = uri.query;

        // Assert
        expect(result).toBe("page=1&pageSize=25")
    });

    it("should return query parts", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team?page=1&pageSize=25"
        const uri = new Uri(path)

        // Act
        const result = uri.queryParts;

        // Assert
        expect(result).toEqual({ page: "1", pageSize: "25" })
    });

    it("should return scheme", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.scheme;

        // Assert
        expect(result).toBe("https")
    });

    it("should return individual segments", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.segments;

        // Assert
        expect(result).toEqual(["www.jamescroft.co.uk", "building-a-successful-development-team"])
    });
});

describe("when retrieving query values", () => {
    it("should return a query part value", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team?page=1&pageSize=25"
        const uri = new Uri(path)

        // Act
        const result = uri.getQueryValue("page");

        // Assert
        expect(result).toBe("1")
    });
});

describe("when converting to string", () => {
    it("should return original URI", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)

        // Act
        const result = uri.toString();

        // Assert
        expect(result).toBe(path)
    });
});

describe("when checking Uri equality", () => {
    it("should return true when comparing two equal Uris", () => {
        // Arrange
        const path = "https://www.jamescroft.co.uk/building-a-successful-development-team/"
        const uri = new Uri(path)
        const uri2 = new Uri(path)

        // Act
        const result = uri.equals(uri2);

        // Assert
        expect(result).toBe(true)
    });

    it("should return false when comparing two different Uris", () => {
        // Arrange
        const uri = new Uri("https://www.jamescroft.co.uk/building-a-successful-development-team/")
        const uri2 = new Uri("https://www.croftjames.co.uk/building-a-successful-development-team/")

        // Act
        const result = uri.equals(uri2);

        // Assert
        expect(result).toBe(false)
    });
});
