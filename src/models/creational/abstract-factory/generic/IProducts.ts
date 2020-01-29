// Each distinct product of a product family should have a base
// interface. All variants of the product must implement this
// interface.

export interface IProductB {
  getName():string
  someAction():string
  otherAction():string
}

export interface IProductA {
  getName():string
  someAction():string
  otherAction():string
}