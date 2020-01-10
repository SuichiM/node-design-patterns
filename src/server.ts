import App from './app'

import HomeController from './controllers/HomeController';

const app = new App({ 
    port: 8888, 
    middleWares: [], 
    controllers: [
        new HomeController(),
    ]
});

app.listen();