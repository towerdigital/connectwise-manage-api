import ExampleClass from '../src';

describe('Example test suite', () => {
  let exampleClass: ExampleClass;

  beforeAll(() => {
    exampleClass = new ExampleClass('This is a public property.');
  });

  test('You can create an instance of Example Class', () => {
    expect(exampleClass).toBeInstanceOf(ExampleClass);
  });

  test('That the example public property is accessiable', () => {
    expect(exampleClass.publicProperty).toEqual('This is a public property.');
  });

  test('That the example method returns a string', () => {
    expect(exampleClass.exampleMethod('Example string...')).toEqual('Example string...');
  });

  test('That the other example method returns an array', () => {
    expect(exampleClass.exampleMethodReturnsArray())
      .toBeArray()
      .toEqual(['red', 'green', 'blue']);
  });

  test('That this method returns a number', () => {
    expect(exampleClass.exampleMethodReturnsNumber())
      .toBeNumber()
      .toEqual(10);
  });
});
