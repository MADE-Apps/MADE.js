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

    /**
     * Initializes a new instance of the TimeSpan class with a specified number of days, hours, minutes, seconds, and milliseconds.
     */
    constructor(days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
        var totalMilliSeconds = (((days * 3600 * 24) + (hours * 3600) + (minutes * 60) + seconds) * 1000) + milliseconds;
        this._ticks = totalMilliSeconds * TimeSpan.TicksPerMillisecond;
    }

    /**
     * Gets the number of ticks that represent the value of the current TimeSpan.
     * @returns {number} The number of ticks that represent the value of this instance.
     */
    ticks(): number {
        return this._ticks;
    }

    /**
     * Gets the days component of the current TimeSpan.
     * @returns {number} The days component of this instance.
     */
    days(): number {
        return Math.trunc(this._ticks / TimeSpan.TicksPerDay);
    }

    /**
     * Gets the hours component of the current TimeSpan.
     * @returns {number} The hours component of this instance.
     */
    hours(): number {
        return Math.trunc((this._ticks / TimeSpan.TicksPerHour) % 24);
    }

    /**
     * Gets the minutes component of the current TimeSpan.
     * @returns {number} The minutes component of this instance.
     */
    minutes(): number {
        return Math.trunc((this._ticks / TimeSpan.TicksPerMinute) % 60);
    }

    /**
     * Gets the seconds component of the current TimeSpan.
     * @returns {number} The seconds component of this instance.
     */
    seconds(): number {
        return Math.trunc((this._ticks / TimeSpan.TicksPerSecond) % 60);
    }

    /**
     * Gets the milliseconds component of the current TimeSpan.
     * @returns {number} The milliseconds component of this instance.
     */
    milliseconds(): number {
        return Math.trunc((this._ticks / TimeSpan.TicksPerMillisecond) % 1000);
    }

    /**
     * Gets the value of the current TimeSpan expressed in whole and fractional days.
     * @returns {number} The total number of days represented by this instance.
     */
    totalDays(): number {
        return this._ticks / TimeSpan.TicksPerDay;
    }

    /**
     * Gets the value of the current TimeSpan expressed in whole and fractional hours.
     * @returns {number} The total number of hours represented by this instance.
     */
    totalHours(): number {
        return this._ticks / TimeSpan.TicksPerHour;
    }

    /**
     * Gets the value of the current TimeSpan expressed in whole and fractional minutes.
     * @returns {number} The total number of minutes represented by this instance.
     */
    totalMinutes(): number {
        return this._ticks / TimeSpan.TicksPerMinute;
    }

    /**
     * Gets the value of the current TimeSpan expressed in whole and fractional seconds.
     * @returns {number} The total number of seconds represented by this instance.
     */
    totalSeconds(): number {
        return this._ticks / TimeSpan.TicksPerSecond;
    }

    /**
     * Gets the value of the current TimeSpan expressed in whole and fractional milliseconds.
     * @returns {number} The total number of milliseconds represented by this instance.
     */
    totalMilliseconds(): number {
        return this._ticks / TimeSpan.TicksPerMillisecond;
    }

    /**
     * Returns a new TimeSpan whose value is the sum of the specified TimeSpan and this instance.
     * @param ts The TimeSpan to add.
     * @returns {TimeSpan} A new TimeSpan that represents the value of this instance plus the value of ts.
     */
    add(ts: TimeSpan): TimeSpan {
        return new TimeSpan(this.days() + ts.days(), this.hours() + ts.hours(), this.minutes() + ts.minutes(), this.seconds() + ts.seconds(), this.milliseconds() + ts.milliseconds());
    }

    /**
     * Returns a new TimeSpan whose value is the difference of the specified TimeSpan and this instance.
     * @param ts The TimeSpan to subtract.
     * @returns {TimeSpan} A new TimeSpan that represents the value of this instance minus the value of ts.
     */
    subtract(ts: TimeSpan): TimeSpan {
        return new TimeSpan(this.days() - ts.days(), this.hours() - ts.hours(), this.minutes() - ts.minutes(), this.seconds() - ts.seconds(), this.milliseconds() - ts.milliseconds());
    }

    /**
     * Returns a new TimeSpan whose value is the multiplication of the specified factor and this instance.
     * @param factor The factor to multiply by.
     * @returns {TimeSpan} A new TimeSpan that represents the value of this instance multiplied by the value of factor.
     */
    multiply(factor: number): TimeSpan {
        return new TimeSpan(this.days() * factor, this.hours() * factor, this.minutes() * factor, this.seconds() * factor, this.milliseconds() * factor);
    }

    /**
     * Returns a new TimeSpan whose value is the division of the specified factor and this instance.
     * @param factor The factor to divide by.
     * @returns {TimeSpan} A new TimeSpan that represents the value of this instance divided by the value of factor.
     */
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
