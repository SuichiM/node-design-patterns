import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from './IControllerBase'

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/factory-method', this.index)
    }

    index = (req: Request, res: Response) => {
        console.log(req.query);

        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]

        res.send({ users });
    }
}

export default HomeController