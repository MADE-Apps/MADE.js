import { IEquatable } from "./IEquatable";

/**
 * Defines a representation for a duration of time.
 */
export class TimeSpan implements IEquatable<TimeSpan> {
    static readonly TicksPerMillisecond = 10000;
    static readonly TicksPerSecond = TimeSpan.TicksPerMillisecond * 1000;
    static readonly TicksPerMinute = TimeSpan.TicksPerSecond * 60;
    static readonly TicksPerHour = TimeSpan.TicksPerMinute * 60;
    static readonly TicksPerDay = TimeSpan.TicksPerHour * 24;

    static readonly Zero = new TimeSpan();

    private _ticks;

    constructor(days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
        var totalMilliSeconds = (((days * 3600 * 24) + (hours * 3600) + (minutes * 60) + seconds) * 1000) + milliseconds;
        this._ticks = totalMilliSeconds * TimeSpan.TicksPerMillisecond;
    }

    ticks() {
        return this._ticks;
    }

    days() {
        return Math.trunc(this._ticks / TimeSpan.TicksPerDay);
    }

    hours() {
        return Math.trunc((this._ticks / TimeSpan.TicksPerHour) % 24);
    }

    minutes() {
        return Math.trunc((this._ticks / TimeSpan.TicksPerMinute) % 60);
    }

    seconds() {
        return Math.trunc((this._ticks / TimeSpan.TicksPerSecond) % 60);
    }

    milliseconds() {
        return Math.trunc((this._ticks / TimeSpan.TicksPerMillisecond) % 1000);
    }

    totalDays() {
        return this._ticks / TimeSpan.TicksPerDay;
    }

    totalHours() {
        return this._ticks / TimeSpan.TicksPerHour;
    }

    totalMinutes() {
        return this._ticks / TimeSpan.TicksPerMinute;
    }

    totalSeconds() {
        return this._ticks / TimeSpan.TicksPerSecond;
    }

    totalMilliseconds() {
        return this._ticks / TimeSpan.TicksPerMillisecond;
    }

    add(ts: TimeSpan): TimeSpan {
        return new TimeSpan(this.days() + ts.days(), this.hours() + ts.hours(), this.minutes() + ts.minutes(), this.seconds() + ts.seconds(), this.milliseconds() + ts.milliseconds());
    }

    subtract(ts: TimeSpan): TimeSpan {
        return new TimeSpan(this.days() - ts.days(), this.hours() - ts.hours(), this.minutes() - ts.minutes(), this.seconds() - ts.seconds(), this.milliseconds() - ts.milliseconds());
    }

    multiply(factor: number): TimeSpan {
        return new TimeSpan(this.days() * factor, this.hours() * factor, this.minutes() * factor, this.seconds() * factor, this.milliseconds() * factor);
    }

    divide(factor: number): TimeSpan {
        return new TimeSpan(this.days() / factor, this.hours() / factor, this.minutes() / factor, this.seconds() / factor, this.milliseconds() / factor);
    }

    equals(other: TimeSpan): boolean {
        return this._ticks === other._ticks;
    }

    toString(): string {
        return this.days() + "." + this.hours() + ":" + this.minutes() + ":" + this.seconds() + "." + this.milliseconds();
    }
}
