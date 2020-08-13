import IAbstractFactory from './IAbstractFactory';
import {ConcreteProductA_Factory1, ConcreteProductB_Factory1} from './ConcreteProducts_Factory1';

// Concrete factories produce a family of products that belong
// to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete
// factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.
export default class ConcreteFactory1 implements IAbstractFactory{
  name:string;

  constructor() {
    this.name = 'Concrete Factory 1';
  }
  createProductA(){
    return new ConcreteProductA_Factory1
  }
  createProductB(){
    return new ConcreteProductB_Factory1
  }
  getName(){
    return this.name;
  }
}