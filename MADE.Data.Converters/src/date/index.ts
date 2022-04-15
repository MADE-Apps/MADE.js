/**
 * Gets the current age in years based on the specified starting date and today's date.
 * @param {Date} startingDate - The starting date.
 * @return {number} A numeric value representing the age in years.
 */
export function toCurrentAge(startingDate: Date): number {
    const currentDate = new Date();
    var yearDiff = currentDate.getFullYear() - startingDate.getFullYear();
    var compareDate = new Date(startingDate.setFullYear(startingDate.getFullYear() + yearDiff));
    if (currentDate < compareDate) {
        yearDiff--;
    }
    return yearDiff;
}

/**
 * Gets the day suffix for the specified date, i.e. st, nd, rd, or th.
 * @param {Date} date - The date to get a day suffix for.
 * @return {string} The day suffix as a string.
 */
export function toDaySuffix(date: Date): string {
    const day = date.getDate();
    switch (day) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
}

/**
 * Rounds the date value to its nearest hour determined by the half hour of each hour.
 * @param {Date} date - The date to round to the nearest hour.
 * @return {Date} The date rounded to the nearest whole hour.
 */
export function toNearestHour(date: Date): Date {
    var hour = date.getMinutes() < 30
        ? date.getHours()
        : date.getHours() + 1;

    return hour == 24
        ? new Date(date.setHours(0, 0, 0, 0))
        : new Date(date.setHours(hour, 0, 0, 0));
}

/**
 * Gets the start of the day represented by the specified date.
 * @param {Date} date - The date.
 * @return {Date} A new date with the same date with the time set to midnight.
 */
export function startOfDay(date: Date): Date {
    return new Date(date.setHours(0, 0, 0, 0));
}

/**
 * Gets the end of the day represented by the specified date.
 * @param {Date} date - The date.
 * @return {Date} A new date with the same date with the time set to just before midnight of the next day.
 */
export function endOfDay(date: Date): Date {
    return new Date(date.setHours(23, 59, 59, 999));
}

/**
 * Sets the time value of a date.
 * @param {Date} date - The date value to set the time of.
 * @param {number} hours - The hours to set.
 * @param {number} minutes - The minutes to set.
 * @param {number} seconds - The seconds to set.
 * @param {number} milliseconds - The milliseconds to set.
 * @return {Date} A new date with the time set.
 */
export function setTime(date: Date, hours: number, minutes: number, seconds: number, milliseconds: number): Date {
    return new Date(date.setHours(hours, minutes, seconds, milliseconds));
}