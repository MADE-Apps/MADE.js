import axios from 'axios';
import { NetworkRequestManager } from '../../src/Http/NetworkRequestManager';
import { JsonGetRequest } from '../../src/Http/Requests/Json/JsonGetRequest';

describe("when processing network manager requests", () => {
    it("should process added requests", async () => {
        // Arrange
        const requestManager = new NetworkRequestManager();
        var request = new JsonGetRequest(axios.create(), "https://jsonplaceholder.typicode.com/todos/1");
        let successCallback = jest.fn();
        let errorCallback = jest.fn();

        requestManager.addOrUpdate(request, (response) => successCallback(response), (error) => errorCallback(error));

        // Act
        await requestManager.processCurrentQueue();

        // Assert
        expect(successCallback).toHaveBeenCalled();
    });
});

function delay(milliseconds: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}