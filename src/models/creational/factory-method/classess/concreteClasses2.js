import {Creator} from './creator.js.js';
import {ConcreteProduct2} from './concreteProduct2.js.js';
/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export class ConcreteCreator2 extends Creator {
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod(){
        return new ConcreteProduct2();
    }
}