// const Interface = require('es6-interface');
import Interface from 'es6-interface';
import IProduct from './Iproduct.js'

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export class ConcreteProduct1 extends Interface(IProduct)  {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}
