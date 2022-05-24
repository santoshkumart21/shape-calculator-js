export function shapeResult(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;

  this.squareRes = () => {
    return this.number1 ** this.number1;
  };

  this.reactangleRes = () => {
    return this.number1 * this.number2;
  };
  this.circleRes = () => {
    return this.number1 * 2;
  };
  this.ellipseRes = () => {
    return Math.PI * (this.number1 * this.number2);
  };
}
