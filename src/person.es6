class Person {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  hello() {
    console.log(`hello, ${this.name}`);
  }

}

export default Person;
