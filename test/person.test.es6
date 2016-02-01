import chai from 'chai';
import Person from '../src/person.es6';

const expect = chai.expect;

/** @test {Person} */
describe('Person', () => {
  /** @test {Person#getName} */
  describe('#getName', () => {
    it('return name', () => {
      const person = new Person('Yamada');
      expect(person.getName()).to.equal('Yamada');
    });
  });
});