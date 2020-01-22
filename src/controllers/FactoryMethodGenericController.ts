import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';

/**
 * here imports a list of all the concrete creators 
 */
import ConcretesCreators from '../models/creational/factory-method';

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
        var content:any = {} ;

        var creatorSelected = ConcretesCreators[req.query.type];
        
        if(creatorSelected){
            content.concreteCreator  = creatorSelected.getName();
            content.productGenerated = creatorSelected.factoryMethod().getName();
            content.description      = creatorSelected.someOperation(); 
            res.send(content);   
        }else{
            res.status(500).send("Concrete Creator Non Supported");
        }
        
    }


}

