function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user.join(" "))); // Solution 1: Join the array elements

function greeter2(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeter2(user)); // Solution 2: Modify the function signature