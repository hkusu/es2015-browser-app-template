/**
 * Person class
 */
class Person {

  /**
   * @constructor
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * @returns {void}
   */
  helloName() {
    console.log(`hello, ${this.name}`);
  }

  /**
   * @param {MyObj} myObj
   * @returns {void}
   */
  static helloObj(myObj) {
    console.log(myObj);
  }

}

export default Person;
