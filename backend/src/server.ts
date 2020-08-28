import App from './app'

import Controllers from './controllers'

const port = process.env.PORT  || 8080;

const app = new App({ 
    port, 
    middleWares: [], 
    controllers: Controllers
});

app.listen();