import Dialog from './dialog';
import webButton from './webButton';

export default class WindowDialog extends Dialog{
  name:string =  'WEB Dialog';
  title:string = 'THIS IS A Web Dialog';
  icon:string = 'mdi-web-box';

  createButton():webButton{
    return new webButton();
  }

}