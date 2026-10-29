function greet(name:string, greeting:string="hello"):string{
    return `${greeting} ${name}`
}
greet("Alice");             // "Hello, Alice!"   — default used
greet("Alice", "Hi");       // "Hi, Alice!"      — default overridden
greet("Alice", undefined);  // "Hello, Alice!"   — undefined triggers default

function createUser{
    name:string,
    role ="Viewer",
    isActive = true,
    score = 0 
}