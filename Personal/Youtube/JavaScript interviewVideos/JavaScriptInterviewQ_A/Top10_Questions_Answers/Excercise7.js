const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
  const greet = person.greet;
  greet();

  
  
  