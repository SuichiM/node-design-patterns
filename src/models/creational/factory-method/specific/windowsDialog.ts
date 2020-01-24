import Dialog from './dialog';
import windowsButton from './windowsButton';

export default class WindowDialog extends Dialog{
  name:string =  'Windows Dialog';
  title:string = 'THIS IS A Windows Dialog';
  icon:string = 'mdi-windows';

  createButton():windowsButton{
    return new windowsButton();
  }

}