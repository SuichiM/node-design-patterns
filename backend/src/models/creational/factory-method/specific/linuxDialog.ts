import Dialog from './dialog';
import linuxButton from './linuxButton';

export default class WindowDialog extends Dialog{
  name:string =  'Linux Dialog';
  title:string = 'THIS IS A Lixux Dialog';
  icon:string = 'mdi-linux';

  createButton():linuxButton{
    return new linuxButton();
  }

}