import { fizzBuzz } from './fizzBuzz';

describe('app tests', () => {
  beforeAll(async () => {
    console.log('before all');
  });

  it('returns zero when zero', () => {
    const res = fizzBuzz(0);

    expect(res).toBe('0');
  });

  it('returns fizz when 3', () => {
    const res = fizzBuzz(3);

    expect(res).toBe('fizz');
  });

  it.each([
    [3],
    [6],
    [9]
])('returns fizz when divisible by 3', (num: number) => {
    const res = fizzBuzz(num);

    expect(res).toBe('fizz');
  });

  it('returns buzz when 5', () => {
    const res = fizzBuzz(5);

    expect(res).toBe('buzz');
  });


  it.each([[5],[10], [20]])('returns buzz when divisible by 5', (num: number) => {
    const res = fizzBuzz(num);

    expect(res).toBe('buzz');
  });

  it.each([[15],[30],[45]])('returns fizzbuzz when divisible by 3 and 5', (num: number) => {
    const res = fizzBuzz(num);

    expect(res).toBe('fizzbuzz');
  })
});
