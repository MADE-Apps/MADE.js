/**
 * Determines whether a date is within a valid range.
 * @param {Date} date - The date to check.
 * @param {Date} from - The lower bound of the date range.
 * @param {Date} to - The upper bound of the date range.
 * @return {boolean} True if the date is in the range; otherwise, false.
 */
export function isDateInRange(date: Date, from: Date, to: Date): boolean {
    return date >= from && date <= to;
}

/**
 * Determines whether a date is a day of the week other than Saturday or Sunday.
 * @param {Date} date - The date to check.
 * @return {boolean} True if the date is between Monday and Friday; otherwise, false.
 */
export function isWeekday(date: Date): boolean {
    return date.getDay() > 0 && date.getDay() < 6;
}

/**
 * Determines whether a date is a day of the week other than Monday through Friday.
 * @param {Date} date - The date to check.
 * @return {boolean} True if the date is Saturday or Sunday; otherwise, false.
 */
export function isWeekend(date: Date): boolean {
    return !isWeekday(date);
}