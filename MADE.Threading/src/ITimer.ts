/**
 * Defines an interface for a timer to use for performing actions on an interval.
 */
export default interface ITimer {
    /**
     * The interval between initiating the tick function.
     */
    interval: number;

    /**
     * The callback called between each interval tick.
     */
    tick: Function;

    /**
     * Starts the timer.
     */
    start(): void;

    /**
     * Stops the timer.
     */
    stop(): void;
}
