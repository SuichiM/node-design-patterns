
import IProduct from './Iproduct';

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
export default abstract class Creator {
    protected name:string = 'default name';

    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     * An Important thing is that the return type of the method should be the Interface
     * of the Product
     */
    public abstract factoryMethod(): IProduct;

    getName(){
        return this.name;
    }

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
     someOperation() {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        
        // Now, use the product.
        return `This Creator method is defined only on the parent class, avoiding repeat code 
                The same creator's code has just worked with any instance of the Product without crashing
                Here the concrete product is: ${product.getName()}` ;
    }
}

