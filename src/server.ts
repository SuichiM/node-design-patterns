import App from './app'

import FactoryMethodGenericController from './controllers/FactoryMethodGenericController';

const app = new App({ 
    port: 8888, 
    middleWares: [], 
    controllers: [
        
        new FactoryMethodGenericController(),
    ]
});

app.listen();