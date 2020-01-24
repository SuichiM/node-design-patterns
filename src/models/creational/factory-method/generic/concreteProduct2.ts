import IProduct from './Iproduct';

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export default class ConcreteProduct2 implements IProduct {
    name:string = 'Concrete Product B';

    public operation(): string {
        return 'This is an operation of the Concrete Product B ';
    }

    getName():string {
        return this.name;
    }
}