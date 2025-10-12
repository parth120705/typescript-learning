let greetings:string="hello world";
greetings.toLowerCase();
console.log(greetings)

//number-can contain floats and numbers

let num=222.5;
num.toFixed()

//boolean
let loggedIn:boolean=true;

//any
//let hero; //not a good practice this is any
//noImplicitAny in config file allow you no any shoud be there in code

let hero:string;

function getHero(){
    return "thor"
}
hero=getHero();


export{}

//Number String Boolean Null Undefined Void Object Array Tuples Any Never Unknown