import App from './app'

import Controllers from './controllers'

const app = new App({ 
    port: 80, 
    middleWares: [], 
    controllers: Controllers
});

app.listen();