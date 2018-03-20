/**
 * Get all the vacation days of a certain country
 * @param {string} country
 */
const getVacationDays = country => {
  return require(`./src/vacation-days/src/${country}/vacation-days.json`);
};

module.exports = {
  getVacationDays
};
