/**
 * @typedef {Object} VacationDays
 * @property {{[name: string]: string}} constants Vacation days that are always on the same day
 * @property {{[year: string]: {[name: string]: string}}} variable Vacation days that change from year to year
 */

/**
 * Get all the vacation days of a certain country
 * @param {string} country
 * @returns {VacationDays}
 */
const getVacationDays = country => {
  return require(`./src/vacation-days/src/${country}/vacation-days.json`);
};

/**
 * Get all the vacation days for the year in which the date is
 * @param {string} country
 * @param {Date} date
 * @returns {{[name: string]: string}}
 */
const getVacationDaysForYear = (country, date) => {
  const vacationDays = getVacationDays(country);

  return Object.assign(
    vacationDays.constants,
    vacationDays.variable[date.getFullYear().toString()]
  );
};

/**
 * Determine if the specified date is a vacation day in the specified country
 *
 * @param {string} country
 * @param {Date} date
 * @returns {bool}
 */
const isVacationDay = (country, date) => {
  const vacationDays = getVacationDaysForYear(country, date);

  const vacationDayNames = Object.keys(vacationDays);

  for (let count = 0; count < vacationDayNames.length; count++) {
    if (compareStringAndDate(vacationDays[vacationDayNames[count]], date)) {
      return true;
    }
  }

  return false;
};

/**
 * @param {string} monthDay
 * @param {Date} date
 * @returns {bool}
 */
const compareStringAndDate = (monthDay, date) => {
  return (
    ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) ===
    monthDay
  );
};

module.exports = {
  getVacationDays,
  getVacationDaysForYear,
  isVacationDay
};
