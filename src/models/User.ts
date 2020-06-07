export class User {

    user_id: number;
    role: string;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;

    constructor (user_id: number, role: string, username: string, password: string, email: string, first_name: string, last_name: string) {
        
        this.user_id = user_id;
        this.role = role;
        this.username = username;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}