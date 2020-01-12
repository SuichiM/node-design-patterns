
>**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

In that way the super class may content generic code, that doesn't will break regardless the type of product with which it interacts.

In this case, the method `someOperation()` can safely use any method from the object that is the result of the factory method (`createProduct()`) since always the result will be an object that implements the `Product` interface, and will contain all the methods defined on the Interface. 

![](https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png)
