/* A set is a collection of items that are unique i.e. no element can be repeated. 
Set in ES6 are ordered: elements of the set can be iterated in the insertion order.
*/
//Set coding problems
let set1= new Set(["Happy","New","Year","Year","To","Me"]);
console.log(set1);
console.log(set1.size); // print size of set
set1.add(3);
console.log(set1);
set1.delete(3);
console.log(set1);
// deleting set and copy set
let set2= new Set(set1);
console.log("Copied set: ");
console.log(set2);
set2.clear();
console.log("set after deletion: ");
console.log(set2);
// checking if any value is present
console.log(set1.has(3));

// here is some more demonstration:

let setOne = new Set();

// adding element to the set
setOne.add(50);
setOne.add(30);
setOne.add(40);
setOne.add("Geeks");
setOne.add("GFG");

// getting all the values
let getValues = setOne.values();

console.log(getValues);

let getKeys = setOne.keys();

console.log(getKeys);

// here is method to check if set is part of another set

Set.prototype.subSet = function(otherSet)
{
	// if size of this set is greater
	// than otherSet then it can't be 
	// a subset
	if(this.size > otherSet.size)
		return false;
	else
	{
		for(let elem of this)
		{
			// if any of the element of 
			// this is not present in the
			// otherset then return false
			if(!otherSet.has(elem))
				return false;
		}
		return true;
	}
}

// using the subSet function

// Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

// prints true
console.log(setA.subSet(setB));

// prints false
console.log(setA.subSet(setC));

// prints true
console.log(setC.subSet(setB));
