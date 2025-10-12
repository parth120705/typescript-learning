// const User={
//     name:"parth",
//     email:"p@gmail.com",
//     isActive:true
// }

// // function createUser({name:string,isPaid:boolean}){}
// // let newUser={name:"parth",isPaid:true,email:"p@gmail.com"}
// // createUser(newUser);

// function createCourse():{name:string,price:number}{
//     return {name:"typescript",price:500};
// }

// // type aliases

// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true};
// }
// createUser({name:"",email:"",isActive:true});

// //example use it as coordinates

// type User={
//     //readonly
//     readonly _id:string,
//     name:string,
//     email:string,
//     isActive:boolean,
//     //optional
//     credCardDetails?:number
// }
// let myUser:User={
//     _id:"123",
//     name:"p",
//     email:"p@gmail.com",
//     isActive:true
// }
// myUser.name="pm";
// myUser._id="12";


type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber&cardDate&{
    cvv:number
}


export {}