import windowDialog from './specific/windowsDialog';
import linuxDialog  from './specific/linuxDialog';
import webDialog  from './specific/webDialog';

export default {
    creator1: new windowDialog,
    creator2: new linuxDialog,
    creator3: new webDialog    
}