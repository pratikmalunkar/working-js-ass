{
    let x;
    console.log(x); // Output: undefined (hoisted)
  
    x = 10;
    console.log(x); // Output: 10
  }
  
  console.log(x); // ReferenceError: x is not defined
  