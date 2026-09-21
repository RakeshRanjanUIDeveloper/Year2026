

let userNames:unknown ="Rakesh" ;

//forces us to verify the type before using it.
if(typeof userNames === "string"){
   console.log(userNames.toUpperCase());
}
