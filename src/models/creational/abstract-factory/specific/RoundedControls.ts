import { IButton, ITextbox } from './IControls';


// Concrete products are created by corresponding concrete
// factories.

export class RoundedButton implements IButton {
  type: string = 'button';

  getStyle() {
    return {
      'border-radius': '50%',
      border: 'solid 1px', 
      height: '36px', 
      'min-width': '64px',
      padding: '0 16px'
    }
  }
  getText() {
    return 'Rounded Button';
  }
  getIcon() {
    return 'otherAction called on ProductA_Kind1';
  }
  getType() {
    return this.type
  }

  toString() {
    return {
      style: this.getStyle(),
      text: this.getText(),
      icon: this.getIcon(),
      type: this.getType()
    }
  }
}

export class RoundedTextbox implements ITextbox {
  type: string = 'text';

  getStyle() {
    return {
      'border-radius': '50%',
      border: 'solid 1px', 
      height: '36px', 
      'min-width': '64px',
      padding: '0 16px'
    }
  }
  getPlaceholder() {
    return 'Rounded Textbox';
  }
  getType() {
    return this.type
  }
  toString() {
    return {
      style: this.getStyle(),
      placeholder: this.getPlaceholder(),
      type: this.getType()
    }
  }


}