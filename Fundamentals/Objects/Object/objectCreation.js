// object creation can be done in two ways:
// 1. Literal form 
// 2. Constructed form
//    2.1 Object constructor function
//    2.2 Using new KeyWord
// 3. Using object.create(object_name) method
// 4. Using es6 classes
/*
  Built-In Objects:

JavaScript consists of a bunch of Built-In Objects, the following list 
explores most of them. Although these built-ins have the appearance of being 
actual types or classes like in any other OOP
*/

// object creation using literal:
let student= {
    Name: "Nikhil Bhasin",
    EnrollNumber: "18104063",
    Company: "Amazon",
    PayScale: "Bahoot"
}

console.log(student.PayScale);

// object creation using object constructor function 
function School(name,boards,address,registrationNumber)
{
    this.name=name;
    this.boards=boards;
    this.address=address;
    this.registrationNumber=registrationNumber;
}

let GarhwaTopSchool= new School("RK Public Garhwa","CBSE","Mazhiao Moore",1234565);
console.log(GarhwaTopSchool.address);

// object creation using new keyword:
let FarmHouse= new Object();
FarmHouse.name="AdityaHouse";
FarmHouse.address= "sahijana";
FarmHouse.AgroType="Poultry";
console.log(FarmHouse.AgroType);

// let's have a new object that contains function and also function as value.
function meraYashuYashu()
{
     console.log("Al Habibi, happy diwali, May god go to school so we sleep on tree!");
}
let myObj = { 
	// Integer Property. 
	int_prop: 5, 
    // Function as value
    function_prop: meraYashuYashu,
	// String Property. 
	str_prop: "GeeksforGeeks", 

	// Object Property (Date). 
	obj_prop: new Date(), 

	// Object Property. 
	inner_obj: { 
		int_prop: 6 
	}, 

	// Function Property. 
	func_prop: function() { 
		console.log("Welcome to GeeksforGeeks!"); 
	} 
}; 

console.log(myObj.int_prop); 
console.log(myObj.str_prop); 
console.log(myObj.obj_prop.toLocaleTimeString()); 
console.log(myObj.inner_obj.int_prop); 
myObj.func_prop();

/* using object create method*/
const coder = {
	isStudying : false,
	printIntroduction : function(){
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
	}
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();

/* usign es6 class method */
// Using es6 classes
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    }
    
    let car1 = new Vehicle('GT', 'BMW', '1998cc');
    
    console.log(car1.name); //GT
    