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