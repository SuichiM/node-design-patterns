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
        this.router.get(this.path, this.index);
        this.router.get(`${this.path}/:creator`, this.getCreator);
    }

    index = (req: Request, res: Response) => {
        let creatorsList = Object
            .keys(ConcretesCreators)
            .map((k) => { return { id: k, description: ConcretesCreators[k]['name'] } })
            .reduce((prev, el) => [...prev, el], [])

        res.send(creatorsList);
    }

    getCreator = (req: Request, res: Response) => {
        var content: any = {};

        var creatorSelected = ConcretesCreators[req.params.creator];

        if (creatorSelected) {
            setTimeout(() => { console.log('awaiting...'); res.send(content); }, 1200);
            content.concreteCreator = creatorSelected.getName();
            content.productGenerated = creatorSelected.factoryMethod().getName();
            content.description = creatorSelected.someOperation();

        } else {
            res.status(500).send("Concrete Creator Non Supported");
        }
    }


}

