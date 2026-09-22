
function greet(name:string, title?:string):string{
    if(title){
        return `Hello ${title} ${name}`
    }
    return `Hello ${name}`;
}
greet("Alice");          // ✓ "Hello, Alice!"
greet("Alice", "Dr.");   // ✓ "Hello, Dr. Alice!"
greet("Alice", undefined); // ✓ same as not passing it


//Rules: optional params must come AFTER required
function create(name:string, age?:number, email?:string){

}
function createtwo(age?:number, name:string, email?:string){
    
}

//Multiple optional params
function createUser(
    name:String,
    age?:number,
    role?:string,
    isActive?:boolean
){
    return{
        name, 
            age:      age      ?? 0,
    role:     role     ?? "viewer",
    isActive: isActive ?? true,
    }
}
createUser("Alice");                      // ✓ only name
createUser("Alice", 25);                  // ✓ name + age
createUser("Alice", 25, "admin");         // ✓ name + age + role
createUser("Alice", 25, "admin", false);  // ✓ all params