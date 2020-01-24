/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
export default interface IButton {
  text:string;

  render(onClickHandler);
  onClick(f);

  getText()
}
   