class Person {
    constructor(public name: string, public age: number) {}
  
    greet(): void {
      console.log(`Hello, my name is ${this.name}!`);
    }
  }
  
  let person1 = new Person("Alice", 35);
  person1.greet(); // Output: Hello, my name is Alice!
  

  // -----------------------------------------------------


