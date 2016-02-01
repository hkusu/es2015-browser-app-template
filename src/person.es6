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
  hello() {
    console.log(`hello, ${this.name}`);
  }

}

export default Person;
