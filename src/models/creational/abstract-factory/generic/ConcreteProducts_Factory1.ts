import {IProductA, IProductB} from './IProducts'

// Concrete products are created by corresponding concrete
// factories.

export class ConcreteProductA_Factory1 implements IProductA{
  getName(){
    return 'Factory1 - ConcreteProductA'
  }
  someAction(){
    return 'someAction called on ProductA_Kind1'  ;
  }
  otherAction(){
    return 'otherAction called on ProductA_Kind1'  ;
  }
}

export class ConcreteProductB_Factory1 implements IProductB{
  getName(){
    return 'Factory1 - ConcreteProductB'
  }
  someAction(){
    return 'someAction called on ProductB_Kind1'  ;
  }
  otherAction(){
    return 'otherAction called on ProductB_Kind1'  ;
  }
}