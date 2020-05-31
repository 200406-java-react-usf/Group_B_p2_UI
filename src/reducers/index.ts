import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";




import { combineReducers } from "redux";

export interface ILoginState {
    authUser: User;
    errorMessage:string;
}
export interface IRegisterState {
    errorMessage: string;
}

export interface IState{
	login: ILoginState;
	register: IRegisterState;
	
}


export const state = combineReducers<IState>({
	login: loginReducer,
	register: registerReducer
})