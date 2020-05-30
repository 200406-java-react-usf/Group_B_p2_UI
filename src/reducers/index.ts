import { combineReducers } from "redux";
import { User } from "../models/User";
import { loginReducer } from "./login-reducer";

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

export interface IState {
    login: ILoginState;
}

export const state = combineReducers<IState>({
    login: loginReducer
});