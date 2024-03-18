/*
JavaScript map is a collection of elements where each element is stored as a Key, 
value pair. Map objects can hold both objects and primitive values as either key or 
value. When we iterate over the map object returns the key, and value pair in the same 
order as inserted. Map() constructor is used to create Map in JavaScript.
*/

/*
Steps to Create a Map
Passing an Array to new Map()
Create a Map and use Map.set()
*/

// map code:
let map1= new Map([
    ["laptop",32400],
    ["ps4",5000],
    ["tv",30000]
]);
console.log(map1);

// inserting new element in map
map1.set("monitor",4500);
console.log(map1);
console.log(map1.has("tv")); // output either true or false whether key value is present
console.log(map1.get("tv"));

let map2= new Map(map1);
console.log("map2 contents are : ");
console.log(map2);
map2.clear(); // will delete map content
console.log(map2);

/*Map object provided by ES6. A key of a Map may occur once, which will be unique in the map’s collection. There are slight advantages to using a map rather than an object.

Accidental Keys & Security: No default keys are stored, only contain what’s explicitly put into them. Because of that, it’s safe to use.
Key Types & Order: It can be any value as a key function, object anything. And the order is straightforward way in the order of entry insertion.
Size: Because of the size property a map can be easily retrieved.
Performance: Any operation can be performed on math so easily in a better way.
Serialization and parsing: We can create our own serialization and parsing support for Map by using JSON.stringify() and JSON.parse() methods.
*/