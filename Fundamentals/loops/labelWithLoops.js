// this is a new concept in javascript now
let i=5;
let j=5;
outerloop: while(i<8){
    innerloop: while(j<8)
    {
        if(j==7 && i==6)
        {
            continue outerloop;
        }
        console.log(i+ " is value of i and "+j+" is the value of j");
        j++;
    }
    i++;
}