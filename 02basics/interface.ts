interface User{
    readonly _id:number,
    name:string,
    email:string,
    googleid?:number,
    //startTrial:()=>string
    //or
    startTrial():string,
    getCoupon:(couponName:string)=>number
}
let parth:User={_id:123,email:"p@gmail.com,",name:"parth",startTrial:()=>{
    return "done trial"
},
getCoupon:(name:string)=>{
    return 10
}}
parth.email="pm@gmail.com"

// parth._id=111;
export {}