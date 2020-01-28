import IAbstractFactory from './IAbstractFactory';
import {Kind1ProductA, Kind1ProductB} from './Kind1_Products';

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