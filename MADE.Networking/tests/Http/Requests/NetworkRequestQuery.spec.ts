import NetworkRequestQuery from '../../../src/Http/Requests/NetworkRequestQuery';

describe("when creating a network request query", () => {
    it("should create from URI string", () => {
        // Arrange
        const uri = "https://example.com/api/v1/networks?query=1&filter=new";

        // Act
        const query = NetworkRequestQuery.fromUri(uri);

        // Assert
        expect(query.toString()).toBe("query=1&filter=new");
    });

    it("should create from query string", () => {
        // Arrange
        const query = "query=1&filter=new";

        // Act
        const queryObject = NetworkRequestQuery.fromQueryString(query);

        // Assert
        expect(queryObject.toString()).toBe(query);
    });

    it("should create from query parts", () => {
        // Arrange & Act
        const queryObject = new NetworkRequestQuery(["query", 1], ["filter", "new"]);

        // Assert
        expect(queryObject.toString()).toBe("query=1&filter=new");
    });
});

describe("when getting query value from a network request query", () => {
    it("should return value from query part", () => {
        // Arrange
        const uri = "https://example.com/api/v1/networks?query=1&filter=new";
        const query = NetworkRequestQuery.fromUri(uri);

        // Act
        const value = query.getValue("query");

        // Assert
        expect(value).toBe("1");
    });
});