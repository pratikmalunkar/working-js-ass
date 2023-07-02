{
    console.log(x); // Output: undefined (hoisted)
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
  
    let x = 1;
    var y = 2;
    const z = 3;
  
    console.log(x); // Output: 1
    console.log(y); // Output: 2
    console.log(z); // Output: 3
  }
  
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // Output: 2 (var is not block-scoped)
  console.log(z); // ReferenceError: z is not defined
  