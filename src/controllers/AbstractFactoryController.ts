import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';


import GenericFactories from '../models/creational/abstract-factory';

import IAbstractFactory from '../models/creational/abstract-factory/generic/IAbstractFactory';
import {IProductA, IProductB} from '../models/creational/abstract-factory/generic/IProducts';
// import DialogsList from '../models/creational/abstract-factory/index-specific';

export default class FactoryMethodGenericController implements IControllerBase {
    public genericPath = '/abstract-factory-generic';
    public specificPath = '/abstract-factory-specific'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.genericPath, this.indexGeneric);
        this.router.get(`${this.genericPath}/:factory`, this.getGenericFactory);
    //    this.router.get(this.specificPath, this.indexSpecific);
    //    this.router.get(`${this.specificPath}/:creator`, this.getSpecificCreator);
    }

    indexGeneric = (req: Request, res: Response) => {
        let factories = Object
            .keys(GenericFactories)
            .map((k) => { return { id: k, description: GenericFactories[k].getName() } })
            .reduce((prev, el) => [...prev, el], [])

        res.send(factories);
    }

    getGenericFactory = (req: Request, res: Response) => {
        var content: any = {products:[]};
        var myProductA: IProductA;
        var myProductB: IProductB;

        var factorySelected:IAbstractFactory = GenericFactories[req.params.factory];

        if (factorySelected) {
            let productAStringified = {};
            let productBStringified = {};
            content.factory = factorySelected.getName();
            // PRODUCT A USE
            myProductA = factorySelected.createProductA();

            productAStringified['name'] = myProductA.getName();
            productAStringified['someActionResult'] = myProductA.someAction();
            productAStringified['otherActionResult'] = myProductA.otherAction();
            
            // PRODUCT B USE
            myProductB = factorySelected.createProductB();
            
            productBStringified['name'] = myProductB.getName();
            productBStringified['someActionResult'] = myProductB.someAction();
            productBStringified['otherActionResult'] = myProductB.otherAction();

            // content.productGenerated = creatorSelected.factoryMethod().getName();
            // content.description = creatorSelected.someOperation();
            content.products.push(productAStringified);
            content.products.push(productBStringified);

            res.send(content);

        } else {
            res.status(500).send("Factory Non Supported");
        }
    }
/* 
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
 */
}

