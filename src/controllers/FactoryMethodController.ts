import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';

/**
 * here imports a list of all the concrete creators 
 */
import ConcretesCreatorsGeneric from '../models/creational/factory-method';
import DialogsList from '../models/creational/factory-method/index-specific';

export default class FactoryMethodGenericController implements IControllerBase {
    public genericPath = '/factory-method-generic';
    public specificPath = '/factory-method-specific'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.genericPath, this.indexGeneric);
        this.router.get(`${this.genericPath}/:creator`, this.getGenericCreator);
        this.router.get(this.specificPath, this.indexSpecific);
        this.router.get(`${this.specificPath}/:creator`, this.getSpecificCreator);
    }

    indexGeneric = (req: Request, res: Response) => {
        let creatorsList = Object
            .keys(ConcretesCreatorsGeneric)
            .map((k) => { return { id: k, description: ConcretesCreatorsGeneric[k]['name'] } })
            .reduce((prev, el) => [...prev, el], [])

        res.send(creatorsList);
    }

    getGenericCreator = (req: Request, res: Response) => {
        var content: any = {};

        var creatorSelected = ConcretesCreatorsGeneric[req.params.creator];

        if (creatorSelected) {
            setTimeout(() => { console.log('awaiting...'); res.send(content); }, 1200);
            content.concreteCreator = creatorSelected.getName();
            content.productGenerated = creatorSelected.factoryMethod().getName();
            content.description = creatorSelected.someOperation();

        } else {
            res.status(500).send("Concrete Creator Non Supported");
        }
    }

    indexSpecific = (req:Request, res: Response) =>{
        let creatorsList = Object
            .keys(DialogsList)
            .map((k) => { return { id: k, description: DialogsList[k].getName() } })
            .reduce((prev, el) => [...prev, el], [])

        res.send(creatorsList);
    }

    getSpecificCreator = (req: Request, res: Response) => {
        var content: any = {};

        var dialogSelected = DialogsList[req.params.creator];

        if (dialogSelected) {
            setTimeout(() => { console.log('awaiting...'); res.send(content); }, 1200);
            content.dialog = dialogSelected.render();

        } else {
            res.status(500).send("Concrete Creator Non Supported");
        }
    }

}

