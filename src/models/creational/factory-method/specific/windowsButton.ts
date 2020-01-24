import IButton from './IButton'
// Concrete products provide various implementations of the
// product interface.

export default class WindowsButton implements IButton{
  text:string = "Win Button";

  render(onClickHandler){
    var button = {};
    button['title'] = this.getText();
    button['onClick'] = this.onClick(onClickHandler);
    return button;
  }

  onClick(f){
    return `handler of the click receiving {${f}} as parameter`;
  }

  getText(){
    return this.text;
  }

}
  