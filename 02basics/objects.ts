const User={
    name:"parth",
    email:"p@gmail.com",
    isActive:true
}

// function createUser({name:string,isPaid:boolean}){}
// let newUser={name:"parth",isPaid:true,email:"p@gmail.com"}
// createUser(newUser);

function createCourse():{name:string,price:number}{
    return {name:"typescript",price:500};
}

// type aliases

type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    return {name:"",email:"",isActive:true};
}
createUser({name:"",email:"",isActive:true});

//example use it as coordinates

export {}