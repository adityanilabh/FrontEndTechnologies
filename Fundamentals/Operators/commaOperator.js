function Func1() { 
    console.log('one'); 
    return 'one'; 
} 
function Func2() { 
    console.log('two'); 
    return 'two'; 
} 
function Func3() { 
    console.log('three'); 
    return 'three'; 
} 
  
// Three expressions are 
// given at one place 
let x = (Func1(), Func2(), Func3()); 
  
console.log(x);