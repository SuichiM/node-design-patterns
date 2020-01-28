import {IProductA, IProductB} from './IProducts'

// Concrete products are created by corresponding concrete
// factories.

export class Kind1ProductA implements IProductA{
  someAction(){
    return 'someAction called on ProductA_Kind1'  ;
  }
  otherAction(){
    return 'otherAction called on ProductA_Kind1'  ;
  }
}

export class Kind1ProductB implements IProductB{
  someAction(){
    return 'someAction called on ProductB_Kind1'  ;
  }
  otherAction(){
    return 'otherAction called on ProductB_Kind1'  ;
  }
}