export class NewUser {

    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    
    constructor(
        fn: string, 
        ln: string, 
        email: string,
        un: string,
        pw: string) 
    {
        this.first_name = fn;
        this.last_name = ln;
        this.email = email;
        this.username = un;
        this.password = pw;
    }
}