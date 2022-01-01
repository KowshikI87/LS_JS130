/*

Problem
- clock independent of time

static methods
- at(hour , [minute])
  - call constructor(hour, minute)
    return a new clock object with given hour and minute (optional)

instance methods
- construtor(hour, [minute])
   - clock is 24 hour clock. So 0 for hour means 24
   - if minute is not specified, assume it is 0
- toString
  - returns a string in this format: "hh:mm"

- add(minute)
  - add minute to clock
  - minute > 0 and could be > 60 (a hour)

- subtrat(minute)
  - subtract minute from clock
  - minute > 0 and could be > 60 (a hour)

- isEqual(anotherClock)
  - return true if both hour and minute property is the same

Example/Test Cases
- given

Data Struture
- class, integer, string

Algorithm

  add(minute)
  - add minute to this.minute
  - if this.minute > 60 then
    add this.minute % 60 to this.hour
    this.minute = this.minute - (this.minute & 60)
  - if this.hour > 24 then this.hour = this.hour % 24

  - return the new clock object

  subtract(minute)
    - totalMinToSubtract = minute % (MIN_IN_HOUR * HOUR_IN_DAY);

    - totalMinToSubtract --> hour, minute
    - this.hour = this.hour - hour
    - this.minute = this.minute - minute

    - if this.minute < 0 then
      this.hour = this.hour - 1
      this.minute = 60 + this.minute

    - if this.hour < 0 then this.hour = 24 + this.hour

    - return the new clock object

Code

*/


const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;

class Clock {
  static at(hour, minute) {
    let newClockObj = new Clock(hour, minute);
    return newClockObj;
  }

  constructor(hour, minute) {
    this.hour = hour;
    if (minute === undefined) {
      this.minute = 0;
    } else {
      this.minute = minute;
    }
  }

  add(minute) {
    let totalMinToAdd = minute % (MIN_IN_HOUR * HOUR_IN_DAY);

    let hourToAdd = Math.floor(totalMinToAdd / MIN_IN_HOUR);
    let minuteToAdd = totalMinToAdd - (hourToAdd * MIN_IN_HOUR);

    this.hour += hourToAdd;
    this.minute += minuteToAdd;

    if (this.hour >= HOUR_IN_DAY) this.hour -= HOUR_IN_DAY;

    // this.minute += minute;

    // if (this.minute >= MIN_IN_HOUR) {
    //   this.hour += Math.floor(this.minute / MIN_IN_HOUR);
    //   this.minute -= (this.minute % MIN_IN_HOUR);
    // }

    // if (this.hour >= HOUR_IN_DAY) this.hour %= HOUR_IN_DAY;

    return this;
  }


  subtract(minute) {
    //max minute to subtract < MIN_IN_HOUR * HOUR_IN_DAY
    let totalMinToSubtract = minute % (MIN_IN_HOUR * HOUR_IN_DAY);

    let hourToSubtract = Math.floor(totalMinToSubtract / MIN_IN_HOUR);
    let minuteToSubtract = totalMinToSubtract - (hourToSubtract * MIN_IN_HOUR);

    this.hour -= hourToSubtract;
    this.minute -= minuteToSubtract;

    if (this.minute < 0) {
      this.hour -= 1;
      this.minute = MIN_IN_HOUR + this.minute;
    }

    if (this.hour < 0) this.hour += HOUR_IN_DAY;

    return this;
  }

  toString() {
    return String(this.hour).padStart(2, "0") + ":" + String(this.minute).padStart(2, "0");
  }

  isEqual(anotherclock) {
    return (this.hour === anotherclock.hour &&
           this.minute === anotherclock.minute);
  }
}


// test("add over an hour", () => {
//   let clock = Clock.at(10).add(61);
//   expect(clock.toString()).toBe('11:01');
// });

let clock = Clock.at(10).add(61);
console.log(clock.toString());

module.exports = Clock;