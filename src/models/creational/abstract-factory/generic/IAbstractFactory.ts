import {IProductA, IProductB} from './IProducts';

export default interface IAbstractFactory {
  name:string;
  createProductA():IProductA;
  createProductB():IProductB;
  getName():string;
}