import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';

import {initPattern} from '../models/creational/factory-method';


import concreteConstructor1 from '../models/creational/factory-method/classess/concreteClasses1';
// import concreteConstructor2 from '../models/creational/factory-method/classess/concreteClasses2';

export default class FactoryMethodController implements IControllerBase {
    public path = '/factory-method'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.index)
    }

    index = (req: Request, res: Response) => {
        console.log(req.query);
        
        var construct ;

        if(req.query === 'con1')
            construct = new concreteConstructor1();
        
        
        
        construct.someOperation();

        res.send();
    }
}

