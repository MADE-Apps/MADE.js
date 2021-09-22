import { Stopwatch } from '../src/Stopwatch'
import { delay } from '../src'

describe("when running a stopwatch", () => {
    it("should calculate elapsed time in milliseconds", async () => {
        // Arrange
        const stopwatch = new Stopwatch();

        // Act
        stopwatch.start();
        await delay(100);
        stopwatch.stop();

        // Assert
        expect(stopwatch.elapsedMilliseconds()).toBeGreaterThan(99);
    });

    it("should allow stopwatch restart", async () => {
        // Arrange
        const stopwatch = new Stopwatch();

        // Act
        stopwatch.start();
        await delay(100);
        stopwatch.restart();
        await delay(100);
        stopwatch.stop();

        // Assert
        expect(stopwatch.elapsedMilliseconds()).toBeGreaterThan(99);
    });

    it("should allow stopwatch reset", async () => {
        // Arrange
        const stopwatch = new Stopwatch();

        // Act
        stopwatch.start();
        await delay(100);
        stopwatch.reset();

        // Assert
        expect(stopwatch.elapsedMilliseconds()).toBe(0);
    });

    it("should allow start new stopwatch", async () => {
        // Arrange
        const stopwatch = Stopwatch.startNew();

        // Act
        await delay(100);
        stopwatch.stop();

        // Assert
        expect(stopwatch.elapsedMilliseconds()).toBeGreaterThan(99);
    });
});