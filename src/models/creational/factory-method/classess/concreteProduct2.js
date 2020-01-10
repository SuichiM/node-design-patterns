// const Interface = require('es6-interface');
import Interface from 'es6-interface';
import IProduct from './Iproduct.js.js'

export class ConcreteProduct2 extends Interface(IProduct)  {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}