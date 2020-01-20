import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';

import ConcreteCreator1 from '../models/creational/factory-method/concreteCreator1';
import ConcreteCreator2 from '../models/creational/factory-method/concreteCreator2';

export default class FactoryMethodGenericController implements IControllerBase {
    public path = '/factory-method-generic'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.index)
    }

    index = (req: Request, res: Response) => {
        var content ;

        var construct ;
        
        switch (req.query.type) {
            case 'con1':
                construct = new ConcreteCreator1;
                break;
            case 'con2':
                construct = new ConcreteCreator2;
                break;
            default:
                break;
        }
        
        if(construct)
            content = construct.someOperation();    
        
        res.send(content);
    }


}

