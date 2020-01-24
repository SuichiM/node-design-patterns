import IButton from './IButton';


// The creator class declares the factory method that must
// return an object of a product class. The creator's subclasses
// usually provide the implementation of this method.
export default abstract class Dialog {
   abstract title : string;
   abstract icon: string;
   abstract name: string; 

    // The creator may also provide some default implementation
    // of the factory method.
    public abstract createButton():IButton

    // Note that, despite its name, the creator's primary
    // responsibility isn't creating products. It usually
    // contains some core business logic that relies on product
    // objects returned by the factory method. Subclasses can
    // indirectly change that business logic by overriding the
    // factory method and returning a different type of product
    // from it.
    public render():object{
      var res = {button:{}};

      // Call the factory method to create a product object.
      const okButton = this.createButton();
      
      res['title'] = this.getTitle();
      res['icon'] = this.getIcon();

      // Now use the product.
      res['button'] = okButton.render(`handler attached to the click event`);

      return res;
    }

    getTitle():string{
      return this.title;
    }
    getIcon():string{
      return this.icon;
    }
    getName():string{
      return this.name;
    }
}