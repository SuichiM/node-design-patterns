import HomeController from './HomeController';
import FactoryMethodController from './FactoryMethodController';
import AbstractFactoryController from './AbstractFactoryController';

export default [
  new FactoryMethodController(),
  new HomeController(),
  new AbstractFactoryController()
]