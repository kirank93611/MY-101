//defining the interface to specify the structure of the user object
interface User {
    firstName:string;
    lastName:string;
    email:string;
    age:number;
}

function isLegal(user:User):boolean {
    if(user.age>18){
        return true; //return true if user is legal
    }

    else return false; //return false if user is illegal 
}