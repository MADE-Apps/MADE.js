import Timer from '../src/Timer'

describe("when running a timer continuously", () => {
    it("should call callback on interval", async () => {
        // Arrange
        let callback = jest.fn()
        let timer = new Timer(callback, 100)

        // Act
        timer.start();
        await delay(500);

        // Assert
        expect(callback).toHaveBeenCalledTimes(4);
        timer.stop();
    });
});

function delay(milliseconds: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}