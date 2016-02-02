import config from './config.es6';
import Person from './person.es6';

const person = new Person('Yamada');
person.helloName();

console.log(config.HOGE_FUGA);

/** @type {MyObj} */
const myObj = { hoge: 'piyo', fuga: 99 };

Person.helloObj(myObj);
