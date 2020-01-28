import IAbstractFactory from './IAbstractFactory';
import {Kind1ProductA, Kind1ProductB} from './Kind1_Products';

// Concrete factories produce a family of products that belong
// to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete
// factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.
export default class Kind1Factory implements IAbstractFactory{
  name:string;

  constructor() {
    this.name = 'Kind 1 Factory';
  }
  createProductA(){
    return new Kind1ProductA
  }
  createProductB(){
    return new Kind1ProductB
  }
  getName(){
    return this.name;
  }
}