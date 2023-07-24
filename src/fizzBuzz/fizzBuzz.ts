export function fizzBuzz(number): string {
  if(number == 0)
    return String(0);
  if(number % 15 == 0)
    return "fizzbuzz";
  if(number % 3 == 0)
    return "fizz";
  if(number % 5 == 0)
    return "buzz";
}
