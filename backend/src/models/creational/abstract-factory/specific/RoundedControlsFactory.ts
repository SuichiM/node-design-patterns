import IControlsFactory from './IControlsFactory';
import {RoundedButton, RoundedTextbox} from './RoundedControls';

// Concrete factories produce a family of products that belong
// to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete
// factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.
export default class RoundedControlsFactory implements IControlsFactory{
  name:string;

  constructor() {
    this.name = 'Rounded Controls Factory';
  }
  createButton(){
    return new RoundedButton();
  }
  createTextbox(){
    return new RoundedTextbox();
  }
  getName(){
    return this.name;
  }
}