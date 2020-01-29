import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';


import GenericFactories from '../models/creational/abstract-factory';
import IAbstractFactory from '../models/creational/abstract-factory/generic/IAbstractFactory';
import {IProductA, IProductB} from '../models/creational/abstract-factory/generic/IProducts';

import FactoriesList from '../models/creational/abstract-factory/index-specific';
import IControlsFactory from '../models/creational/abstract-factory/specific/IControlsFactory';
import {IButton, ITextbox} from '../models/creational/abstract-factory/specific/IControls';

export default class FactoryMethodGenericController implements IControllerBase {
    public genericPath:string  = '/abstract-factory-generic';
    public specificPath:string = '/abstract-factory-specific';
    public router = express.Router();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.genericPath, this.indexGeneric);
        this.router.get(`${this.genericPath}/:factory`, this.getGenericFactory);
        this.router.get(this.specificPath, this.indexSpecific);
        this.router.get(`${this.specificPath}/:creator`, this.getSpecificCreator);
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
        let productAStringified = {};
        let productBStringified = {};

        var factorySelected:IAbstractFactory = GenericFactories[req.params.factory];

        if (! factorySelected)
         return res.status(500).send("Factory Non Supported");
        
        
        content.factory = factorySelected.getName();
        
        // PRODUCT A USE
        myProductA = factorySelected.createProductA();
        myProductB = factorySelected.createProductB();        

        // PRODUCT B USE
        productAStringified = myProductA.toString();
        productBStringified = myProductB.toString();
        
        // content.productGenerated = creatorSelected.factoryMethod().getName();
        // content.description = creatorSelected.someOperation();
        content.products.push(productAStringified);
        content.products.push(productBStringified);

        res.send(content);

       
    }


    indexSpecific = (req:Request, res: Response) =>{
        let creatorsList = Object
            .keys(FactoriesList)
            .map((k) => { return { id: k, description: FactoriesList[k].getName() } })
            .reduce((prev, el) => [...prev, el], [])

        res.send(creatorsList);
    }

    getSpecificCreator = (req: Request, res: Response) => {
        var content: any = {controls:{}};

        var factorySelected:IControlsFactory = FactoriesList[req.params.creator];
        var myButton: IButton;
        var myTextbox: ITextbox;
        let myButtonStringified = {};
        let myTextboxStringified = {};

        if (! factorySelected) 
            return res.status(500).send("Concrete Creator Non Supported");
        
        content.factory = factorySelected.getName();

        myButton = factorySelected.createButton();
        myTextbox = factorySelected.createTextbox();

        myButtonStringified = myButton.toString();
        myTextboxStringified = myTextbox.toString();
        
        content.controls.button = myButtonStringified;
        content.controls.textbox = myTextboxStringified;

        setTimeout(()=>{res.send(content)}, 1500)
    }

}

