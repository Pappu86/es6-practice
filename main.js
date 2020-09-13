
//Spread operator
let poorCuntry=["Bangladesh","Srilanka"];
let richCountry=["America","Italy", ...poorCuntry];

console.log(richCountry);

// Rest parameter
function show(...numbers) {
    console.log(numbers);
    let sum=0;
    for(let i of numbers){
        sum+=i;
        console.log("sum =", sum);
    }
}

show(1,2,2,5);