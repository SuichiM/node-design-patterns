
import {Creator}        from './creator';
import ConcreteProduct2 from './concreteProduct2';

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export default class ConcreteCreator2 extends Creator {

    /**
     *
     */
    constructor() {
        super();
        this.name = 'Concrete Creator B';
    }

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod() {
        console.log('Concrete Creator B is creating the specific ProductB');
        return new ConcreteProduct2();
    }
}
