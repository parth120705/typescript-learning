function addTwo(num:number):number{
    return num+2;
    //return "hello world"
}

function getUpper(st:string){
    return st.toUpperCase();
}
function signUp(name:string,email:string,isPaid:boolean){

}
let logInUser=(name:string,email:string,isPaid:boolean=false)=>{}

let value=addTwo(5);
getUpper("parth 4")

signUp("parth","munjal@gmail.com",true);
logInUser("parth","munjal@gmail.com");

const sayHello=(s:string):string=>{
    return "Hello";
}
const heros=["iron","thor","spider"];
// const heros=[1,2,3];
heros.map((hero:string)=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}



export{}