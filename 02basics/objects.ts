const User={
    name:"parth",
    email:"p@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}
let newUser={name:"parth",isPaid:true,email:"p@gmail.com"}
createUser(newUser);

function createCourse():{name:string,price:number}{
    return {name:"typescript",price:500};
}

export {}