import {IProductA, IProductB} from './IProducts'

export class Kind1ProductA implements IProductA{
  someAction(){
    return 'someAction called on ProductA1'  ;
  }
  otherAction(){
    return 'otherAction called on ProductA1'  ;
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