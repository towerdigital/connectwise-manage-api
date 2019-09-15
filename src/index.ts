export default class ExampleClass {
  private privateProperty: string;

  number: number;

  colorArray: string[];

  constructor(public publicProperty: string) {
    this.privateProperty = 'This is a private property.';
    this.number = 10;
    this.colorArray = ['red', 'green', 'blue'];
  }

  exampleMethod(inputStr: string): string {
    return inputStr;
  }

  exampleMethodReturnsArray(): string[] {
    return this.colorArray;
  }

  exampleMethodReturnsNumber(): number {
    return this.number;
  }

  exampleMethodReturnPublicProperty(): string {
    return this.publicProperty;
  }
}
