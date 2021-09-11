import ITimer from "./ITimer";

/**
 * Defines a timer to use for performing actions on an interval.
 */
export default class Timer implements ITimer {
    interval: number;
    tick: Function;
    private _isContinuous: boolean;
    private _timerId: number;

    constructor(tick: Function, interval: number, isContinuous: boolean = true) {
        this.tick = tick;
        this.interval = interval;
        this._isContinuous = isContinuous;
        this._timerId = 0;
    }

    start(): void {
        if (this._isContinuous) {
            this._timerId = setInterval(this.tick, this.interval);
        } else {
            this._timerId = setTimeout(this.tick, this.interval);
        }
    }

    stop(): void {
        if (this._isContinuous) {
            clearInterval(this._timerId);
        } else {
            clearTimeout(this._timerId);
        }
    }
}
