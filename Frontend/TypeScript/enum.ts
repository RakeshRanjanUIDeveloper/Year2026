
enum Direction{
    Up,
    Down,
    Left,
    Right
}

let move:Direction = Direction.Up;
console.log(move); //0
console.log(Direction[0]) //Up

enum HttpStatus{
    OK =200,
    Created= 201,
    BadRequest = 400,
    NotFound =404,
    ServerError = 500
}
function handleResponse(status:HttpStatus){
    if(status === HttpStatus.OK){
        console.log("Successed")
    }
}
handleResponse(200)


enum Role {
    Admin ="ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}
let userRole:Role = Role.Admin;
console.log(userRole)


const enum Day{
    Mon=1, Tue, Wed, Thu, Fri, Sat, Sun
}
let workday:Day= Day.Tue;
console.log(workday)