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
interface User{
    githubToken:string
}
interface Admin extends User{
    role:"admin"|"ta"|"learner"
}
let parth:Admin={_id:123,email:"p@gmail.com,",name:"parth",startTrial:()=>{
    return "done trial"
},
getCoupon:(name:string)=>{
    return 10
},role:"admin",githubToken:"tttt"}
parth.email="pm@gmail.com"

// parth._id=111;
export {}