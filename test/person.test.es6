import chai from 'chai';
import Person from '../src/person.es6';

const expect = chai.expect;

describe('Person', () => {
  describe('#getName', () => {
    it('return name', () => {
      const person = new Person('Yamada');
      expect(person.getName()).to.equal('Yamada');
    });
  });
});