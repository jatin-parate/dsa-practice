const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const getDaysInMonth = (month, year) => {
  if (month === 2) {
    return year % 4 === 0 || year % 100 === 0 ? 29 : 28;
  }

  return daysInMonth[month - 1];
};

class InputDate {
  year = 0;
  month = 0;
  day = 0;

  /**
   *
   * @param {number|InputDate} day
   * @param {number} [month]
   * @param {number} [year]
   * @returns
   */
  constructor(day, month, year) {
    if (day instanceof InputDate) {
      this.day = day.day;
      this.month = day.month;
      this.year = day.year;

      return;
    }
    /**
     * @type {number}
     */
    this.day = day;
    /**
     * @type {number}
     */
    this.month = month;
    /**
     * @type {number}
     */
    this.year = year;
  }

  getNextDay() {
    // total days in current month
    const daysInMonth = getDaysInMonth(this.month, this.year);
    const nextDay = new InputDate(this);

    // if current day is in month
    if (this.day < daysInMonth) {
      nextDay.day += 1;
      return nextDay;
    }

    // if last day of month
    nextDay.day = 1;

    // if last month of year
    if (this.month === 12) {
      nextDay.year += 1;
      nextDay.month = 1;
      return nextDay;
    }

    // else
    nextDay.month += 1;
    return nextDay;
  }

  /**
   *
   * @param {InputDate} date
   * @returns
   */
  isEqual(date) {
    const { day, month, year } = date;
    return year === this.year && month === this.month && day === this.day;
  }
}

/**
 *
 * @param {InputDate} date1
 * @param {InputDate} date2
 * @returns
 */
const isGreaterThan = (date1, date2) =>
  date1.year > date2.year || date1.month > date2.month || date1.day > date2.day;

/**
 *
 * @param {InputDate} currDate
 * @param {InputDate} birthDate
 * @returns {number}
 * @throws {Error}
 */
const calculateDays = (currDate, birthDate) => {
  if (isGreaterThan(birthDate, currDate)) {
    throw Error("Birthday cannot be greater than current date");
  }

  let days = 0;

  let nextDate = new InputDate(birthDate);
  while (!nextDate.isEqual(currDate)) {
    days += 1;
    nextDate = nextDate.getNextDay();
  }

  return days;
};

const days = calculateDays(
  new InputDate(31, 12, 2021),
  new InputDate(28, 07, 1999)
);

console.log('days', days);