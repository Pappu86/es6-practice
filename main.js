
//Spread operator
let poorContry=["Bangladesh","Srilanka"];
let richCountry=["America","Italy", ...poorContry];

//console.log(richCountry);

// Rest parameter
function show(...numbers) {
    //console.log(numbers);
    let sum=0;
    for(let i of numbers){
        sum+=i;
        //console.log("sum =", sum);
    }
}

show(1,2,2,5);

//Dynamic function
var name=function (nameValue) {
return nameValue;
}

//console.log(name("Md.Pappu Miahn"));

//Var, Let and Const variable
var name1="Md.Pappu Miahn";
    name1="Zakaria Husain";

//console.log(name1);

let name2="Md.Pappu Miahn";
    name2="Zara";

//console.log(name2);

const name3="Md.Pappu Miahn";
//won't be reassign const value
    //name3="Zara";

//console.log(name3);