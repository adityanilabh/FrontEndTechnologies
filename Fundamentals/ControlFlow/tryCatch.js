// here is one of the try catch exceptional handling 
try{
    let a="Here they are:";
    console.log(a);
}
catch(err)
{
    console.log("error occured! "+err);
}
finally{
    console.log("this block will run at every time regardless of previous two!");
}