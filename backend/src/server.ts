import App from './app'

import Controllers from './controllers'

const port = Number.parseInt(process.env.PORT)  || 3000;

const app = new App({ 
    port, 
    middleWares: [], 
    controllers: Controllers
});

app.listen();