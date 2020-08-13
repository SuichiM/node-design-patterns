import {IButton, ITextbox} from './IControls';

export default interface IControlsFactory {
  name:string;
  createButton():IButton;
  createTextbox():ITextbox;
  getName():string;
}