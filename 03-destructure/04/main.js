function sayHi(name) {
    let name = "Guest";
    console.log(name); // * error <- name has already been declared as a parameter
  }
  
  sayHi("Jim");