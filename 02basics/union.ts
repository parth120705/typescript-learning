let score :number | string |boolean=33;
score="55"
score=true


type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}

let parth:User|Admin={name:"parth",id:123}
parth={username:"parth123",id:134}

function getDbId(id:number|string):void{
    console.log(`Db id is ${id}`)
}
getDbId(3);
getDbId("3")

function getDbID(id:number|string):void{
    if (typeof id==="string") {
        id.toLowerCase();
    }
}

const data:(number|string|boolean)[]=[1,"2",3,"4",false]
const data1:any[]=[1,"2",3,"4",false] //dont use this

let pie:3.14=3.14 //like a const

let status:"pending"|"sucess"|"reject";
status="sucess"





export {}