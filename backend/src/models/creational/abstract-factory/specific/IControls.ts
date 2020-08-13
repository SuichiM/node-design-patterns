// Each distinct product of a product family should have a base
// interface. All variants of the product must implement this
// interface.

export interface IButton {
  getType():string
  getStyle():object
  getText():string
  getIcon():string
  toString():object
}

export interface ITextbox {
  getType():string
  getStyle():object
  getPlaceholder():string
  toString():object
}