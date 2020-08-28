import App from './app'

import Controllers from './controllers'

const app = new App({ 
    port: process.env.PORT || 3000, 
    middleWares: [], 
    controllers: Controllers
});

app.listen();