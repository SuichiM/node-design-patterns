import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase';

export default class HomeController implements IControllerBase {
  public genericPath = '/catalog';
  public router = express.Router()

  private patternsCatalog = [{
    id: "creational",
    name: "Creational",
    patterns: [
      { id: "fam", name: "Factory Method", route: "/factory-method" },
      { id: "abf", name: "Abstract Factory", route: "/abstract-factory" },
      { id: "sin", name: "Singleton*", route: "/singleton" },
      { id: "pro", name: "Prototype*", route: "/prototype" },
      { id: "bui", name: "Builder*", route: "/builder" }
    ]
  },
  {
    id: "structural",
    name: "Structural",
    patterns: [
      { id: "prx", name: "Proxy*", route: "/proxy" },
      { id: "ada", name: "Adapter*", route: "/adapter" },
      { id: "dec", name: "Decorator*", route: "/decorator" }
    ]
  }];

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get(this.genericPath, this.indexGeneric);
  }

  indexGeneric = (req: Request, res: Response) => {
    res.send(this.patternsCatalog);
  }

}

