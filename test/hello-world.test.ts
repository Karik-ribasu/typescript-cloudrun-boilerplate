import { helloWorld } from '@src/hello-world';

test('hello world', () => {
  const spy = jest.spyOn(console, 'log');
  helloWorld();
  expect(spy).toHaveBeenCalledWith('hello world');
});
