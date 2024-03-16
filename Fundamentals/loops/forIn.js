const person={
    firstName: "Abhishek",
    lastName: "Singhania",
    PhoneNumber: 934343,
    address: "Nhi btaunga"
}

const Person1= Object.create(person);
Person1.school= "Kendriya Vidyalaya";
Person1.position= 12;
Person1.showEnrollMent= function(){
    console.log("Address nhi btaunga na enroll!");
}

for(let p in Person1)
{
    console.log(p+"-> "+Person1[p]);
}