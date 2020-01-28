// Each distinct product of a product family should have a base
// interface. All variants of the product must implement this
// interface.

export interface IProductB {
  someAction():string
  otherAction():string
}

export interface IProductA {
  someAction():string
  otherAction():string
}