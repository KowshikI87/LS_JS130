/* eslint-disable max-len */
/*

Problem
- construct object that represetns a meetup date


class Meetup
- instance methods
  - constructor(yyyy, month)
    - this.yyyy = yyyy
    - this.month = month
  - day(dayOfWeek, schedule) --> case of args does not matter
    - input
      - dayOfWeek: saturday, sunday, monday, tuesday, wednesday, thursday, friday
      - dateDescription: first, second, third, fourth, fifth, last, teenth
    - output
      - determine the date of the meetup in the specified year and month using instance properties
        input to the day function. Then return the date object

Details
- Months with 30 days: April, June, September, November
- Februaryhas 28 in most years, but 29 in leap years
- All the other months have 31 days
- The first day of the week of the month (DOWM) is between 1-7th of the month
- The second day of the week of the month is between 8th - 14th of the month
- The third DOWM is between the 15th and 21st of the month
- The fourth DOWM is between teh 22nd and 28th of the month
- The fifth DOWM is between the 29th and 31st of the month
- The last day of the week of the month is between the 22nd and the 31st of the month
  depending on the number of days in the month


Example/Test Cases


Data Structure
- we will be working with the Date objects in our language of choice


Algorithm

  - I don't know where to get the start dates of months for differnet years?

  Hint/Questions: General
  - determine the 7 day period in which the meetup will occur (see PEDAC for appropriate ranges)
  - Search the range of dates that contain the meetup date for the date that matches the desired
    day of week.

  Hint/Questions: JavaScript
  - Month number in JS Date object rnage from 0(January) to 11 (December)
  - Determine last day of a month
    - Pass 0 for the day argument of Date constructor. The date we will get back is the
    last date of the month prior to the indicated year and month


  Constructor
  - save the year and month
  - determine the last day of the month (28 - 31) (see hint above)

  Method: day
    - convert the weekday and schedule descriptor to lowercase.
    - calculate the first possible day of the month for the meetup
    - calculate the last possibleday of the month of the meetup
    - Search the range of possible days for the date that occurs on the desired 
      day of teh week
    - Return a date object for the first matching day or a value that indicate that a meetup date
    could not be found
Code


*/

"use strict";

const DayOfWeek = {
  sunday:    0,
  monday:    1,
  tuesday:   2,
  wednesday: 3,
  thursday:  4,
  friday:    5,
  saturday:  6,
};

Object.freeze(DayOfWeek);

const ScheduleStartDay = {
  first:  1,
  second: 8,
  third:  15,
  fourth: 22,
  fifth:  29,
  teenth: 13,
  last:   undefined, // see _firstDayToSearch
};
Object.freeze(ScheduleStartDay);

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let firstPossibleDay = this._firstDayToSearch(schedule);
    //we are using min function because sometimes, the date they are asking for
    //does not exist
    let lastPossibleDay = Math.min(firstPossibleDay + 6, this.daysInMonth);
    let dayOfWeek = DayOfWeek[weekday];

    for (let day = firstPossibleDay; day <= lastPossibleDay; day += 1) {
      let date = new Date(this.year, this.month - 1, day);
      if (date.getDay() === dayOfWeek) {
        return date;
      }
    }

    return null;
  }

  _firstDayToSearch(schedule) {
    /*
      //the last day of a week in a month is either of last 7 days of a month
        //that is the last day of month, last day of month - 1, last day of month - 2
        //last day of month - 3, last day of month - 4, last day of month - 5,
        //last day of month - 6
    */
    return ScheduleStartDay[schedule] || (this.daysInMonth - 6);
  }
}

module.exports = Meetup;