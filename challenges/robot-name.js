/*

Problem
- class Robot
  - constructor()
    - set a name property only

  - static method: nameGenerator
    - generates a string in this format:
      [upper case Letter][upperCaseLetter][3 dgiits]

  - static property: namesGenerated
    - keep a list of names generated so far so when generating new name,
    it does not produce an existing name

  - instance method: reset()
    - sets the name of the robot again and wipes old name
    - not clear if we should wipe the robot's existing name from namesGenerated
      - for now, don't need to do that

  - instance method: isRobotNameTaken(name)
    - returns true if the name of the robot exists in
    namesGenerated static property

  - might create static methods
    - one that generates a random letter
    - one that generates a random digit


Example/Test Cases
- given

Data Structure


Algorithm

- hardest to do: how to genertae a random letter and
how to generated a random integer
  - both should require generating random integer
    (one for charCode range of A-Z) and another between 0 to 9


Code

*/

const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;

class Robot {
  constructor() {
    this.serial = Robot._generateSerial();
  }

  static serialGenerated = [];

  static _generateSerial() {
    while(true) {
      let serial =  Robot._generateRandomLetterBtwAZ() +
      Robot._generateRandomLetterBtwAZ() +
      Robot._generateRandomNumInRange(0, 9) +
      Robot._generateRandomNumInRange(0, 9) +
      Robot._generateRandomNumInRange(0, 9);
      
      if (!Robot._isRobotSerialTaken(serial)) {
        Robot.serialGenerated.push(serial);
        return serial;
      } 
    }
  }

  static _freeName(serial) {
    Robot.serialGenerated.splice(Robot.serialGenerated.indexOf(serial), 1);
  }

  static _generateRandomNumInRange(minNum, maxNum) {
    let min = Math.ceil(minNum);
    let max = Math.floor(maxNum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static _generateRandomLetterBtwAZ() {
    let charCode = Robot._generateRandomNumInRange(A_CHAR_CODE, Z_CHAR_CODE);
    return String.fromCharCode(charCode);
  }

  static _isRobotSerialTaken(serial) {
    return Robot.serialGenerated.includes(serial);
  }

  name() {
    return this.serial;
  }

  reset() {
    let newSerial = Robot._generateSerial();
    Robot._freeName(this.serial); //optional
    this.serial = newSerial;
  }
}

// let newRobot = new Robot();
// console.log(newRobot.name());
// newRobot.reset();
// console.log(newRobot.name());

module.exports = Robot;