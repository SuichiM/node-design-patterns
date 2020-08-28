import App from './app'

import Controllers from './controllers'

const app = new App({ 
    port: 3000, 
    middleWares: [], 
    controllers: Controllers
});

app.listen();