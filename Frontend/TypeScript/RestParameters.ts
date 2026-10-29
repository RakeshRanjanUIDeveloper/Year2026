function sum(...numbers:number[]):number{
    return numbers.reduce((total, n) => total + n, 0)
}
console.log(sum())
console.log(sum(1,2,3))
console.log(sum(10, 20, 30, 40, 50))

// ── Required params BEFORE rest ─────────────────────────
function logWithPrefix(prefix: string, ...messages: string[]): void {
  //                   ↑ required first  ↑ rest must be last
  messages.forEach(msg => console.log(`[${prefix}] ${msg}`));
}
logWithPrefix("ERROR", "Auth failed", "Try again", "Check logs");