import IProduct from './Iproduct';

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export default class ConcreteProduct2 implements IProduct {
    public operation(): string {
        return '{This is a concrete Prouct of type 2}';
    }
}