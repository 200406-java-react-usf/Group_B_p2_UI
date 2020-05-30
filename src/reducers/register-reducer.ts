import { AnyAction } from "redux";
import { IRegisterState } from ".";

const initialState: IRegisterState ={
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}


export const registerReducer = (state: IRegisterState = initialState, action: AnyAction) => {

}