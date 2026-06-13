interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

const user1 : User ={
    name:"Rakesh",
    age:32,
    isLoggedIn:true
}

type UserType ={
    name: string,
    age: number,
    isLoggedIn: boolean
    
}
const user2 : UserType ={
    name:"Ranjan",
    age:33,
    isLoggedIn: false
}

type Status = 'active' | 'inactive' | 'pending'
type AdminUser = 'User' & { adminLevel : number};
type ID= string | number

interface Animal{
    name : string
}
interface Dog extends Animal{
    bread : string
}
const dog: Dog = {
    name : "Rex",
    bread : "Labrador"
}