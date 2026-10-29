function greet(name:string, greeting:string="hello"):string{
    return `${greeting} ${name}`
}
greet("Alice");             // "Hello, Alice!"   — default used
greet("Alice", "Hi");       // "Hi, Alice!"      — default overridden
greet("Alice", undefined);  // "Hello, Alice!"   — undefined triggers default

function createUser(
    name:string,
    role ="Viewer",
    isActive = true,
    score = 0 
){
    return {name, role, isActive, score}
}

// ── Defaults can be expressions, not just literals ───────
function getTimestamp(date: Date = new Date()):string{
    return date.toISOString();
}

// ── Passing undefined explicitly triggers the default ────
function log(msg: string, level: string = "info"): void {
  console.log(`[${level.toUpperCase()}] ${msg}`);
}