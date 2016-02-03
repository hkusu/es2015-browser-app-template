import Const from './const.es6';
import Person from './person.es6';

const person = new Person('Yamada');
person.helloName();

/** @type {MyObj} */
const myObj = { hoge: 'piyo', fuga: 99 };
Person.helloObj(myObj);
