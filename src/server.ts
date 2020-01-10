import App from './app'

import FactoryMethodController from './controllers/FactoryMethodController';

const app = new App({ 
    port: 8888, 
    middleWares: [], 
    controllers: [
        new FactoryMethodController(),
    ]
});

app.listen();