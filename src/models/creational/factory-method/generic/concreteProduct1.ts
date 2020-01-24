import IProduct from './Iproduct';

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export default class ConcreteProduct1 implements IProduct {
    name:string = 'Concrete Product A';

    public operation(): string {
        return 'This is an operation of the Concrete Product A';
    }

    getName():string {
        return this.name;
    }
}