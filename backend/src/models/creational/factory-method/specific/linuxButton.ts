import IButton from './IButton'
// Concrete products provide various implementations of the
// product interface.

export default class WindowsButton implements IButton{
  text:string = "Button";
  icon:string = 'mdi-linux';

  render(onClickHandler){
    var button = {};
    button['title'] = this.getText();
    button['onClick'] = this.onClick(onClickHandler);
    button['icon'] = this.getIcon();
    return button;
  }

  onClick(f){
    return `handler of the click receiving {${f}} as parameter`;
  }

  getText(){
    return this.text;
  }

  getIcon(){
    return this.icon;
  }
}
  