
import {Creator} from './creator.js';
import {ConcreteProduct1} from './concreteProduct1.js';

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export class ConcreteCreator1 extends Creator {

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod() {
        return new ConcreteProduct1();
    }
}
