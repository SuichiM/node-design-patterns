>**Abstract Factory** is a creational design pattern that lets you create and handle a family of related products.

In fact the main idea is that a client can use any product generated by the factory without care the concrete kind of products generated.

***ProductA***, and ***ProductB*** Interfaces will declare all the methods that can be used on the Client class, that way the client always knows the methods that can invoke on some product.

The Concretes Factories will be groupers of products of the same variant. If you think in UI controls, *(buttons, radiobuttons, checkboxes, selects)* you may have factories for diferents OS *(WindowsFactory, LinuxFactory, MacFactory, WebFactory)*. 



![](https://refactoring.guru/images/patterns/diagrams/abstract-factory/structure.png)