import { performance } from 'perf_hooks';

/**
 * Defines a mechanism for measuring elapsed time.
 */
export class Stopwatch {
    private startTime: number = 0;
    private endTime: number = 0;

    /**
     * Gets a value indicating whether the Stopwatch is running.
     */
    isRunning: boolean = false;

    /**
     * Gets the total elapsed time measured by the current instance, in milliseconds, once stopped.
     */
    elapsedMilliseconds() {
        if (this.isRunning) {
            this.endTime = performance.now();
        }

        return this.endTime - this.startTime;
    };

    /**
     * Starts measuring elapsed time for an interval.
     */
    start() {
        if (this.isRunning) {
            return;
        }

        this.isRunning = true;
        this.startTime = performance.now();

        console.log('Stopwatch started');
    }

    /**
     * Stops measuring elapsed time for an interval.
     */
    stop() {
        if (!this.isRunning) {
            return;
        }

        this.isRunning = false;
        this.endTime = performance.now();

        console.log(`Stopwatch took ${this.elapsedMilliseconds()} to run`);
    }

    /**
     * Stops time interval measurement and resets the elapsed time to zero.
     */
    reset() {
        this.startTime = 0;
        this.endTime = 0;
        this.isRunning = false;
    }

    /**
     * Stops time interval measurement, resets the elapsed time to zero, and starts measuring elapsed time.
     */
    restart() {
        this.reset();
        this.start();
    }

    /**
     * Initializes a new Stopwatch instance, sets the elapsed time property to zero, and starts measuring elapsed time.
     */
    static startNew() {
        var stopwatch = new Stopwatch();
        stopwatch.start();
        return stopwatch;
    }
}