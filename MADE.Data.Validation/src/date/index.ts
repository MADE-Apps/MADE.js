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