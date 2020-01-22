
import {Creator}        from './creator';
import ConcreteProduct1 from './concreteProduct1';

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export default class ConcreteCreator1 extends Creator {
    
    /**
     *
     */
    constructor() {
        super();
        this.name = 'Concrete Creator A';
    }
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod() {
        console.log('Concrete Creator A is creating the specific ProductA');
        return new ConcreteProduct1();
    }
}
