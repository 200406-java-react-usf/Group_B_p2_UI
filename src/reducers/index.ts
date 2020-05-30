import { combineReducers } from "redux";
import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { Inventory } from "../models/Inventory";
import { NewInventory } from "../models/NewInventory";
import { Invoice } from "../models/Invoice";
import { navbarReducer } from "./navbar-reducer";
import { newItemReducer } from "./new-item-reducer";
import { registerReducer } from "./register-reducer";
import { browseItemsReducer } from "./browse-items-reducer";
import { inventoryReducer } from "./inventory-reducer";
import { cartReducer } from "./cart-reducer";
import { itemDetailsReducer } from "./item-details-reducer";



export interface ILoginState {
    authUser: User;
    errorMessage:string;
}

export interface IItemDetailsState {
    
}

export interface ICartState {
    cart: Array<Inventory>;
}

export interface IBrowseItemsState {
    inventory: Array<Inventory>;
    thisItemId: number;
}

export interface IRegisterState {
    newUser: NewUser;
}

export interface INewItemState {
    newItem: NewInventory;
}

export interface INavbarState {

}

export interface IInventoryState {

}

export interface IInvoiceState {
    invoice: Invoice;
}


export interface IState {
    login: ILoginState;
    logout: INavbarState;
    register: IRegisterState;
    addNewItem: INewItemState;
    getAllItems: IInventoryState;
    updateItem: IInventoryState;
    deleteItem: IInventoryState;
    addItemToCart: IItemDetailsState;
    deleteItemFromCart: ICartState;
    updateQuantity: ICartState;
    newInvoice: ICartState;
    getInventory: IBrowseItemsState; 
    getItemDetails:  IItemDetailsState;
    setThisItem: IBrowseItemsState;
}

export const state = combineReducers<IState>({ 
    register: registerReducer,
    logout: navbarReducer,
    addNewItem: newItemReducer,
    getAllItems: inventoryReducer,
    updateItem: inventoryReducer,
    deleteItem: inventoryReducer,
    addItemToCart: itemDetailsReducer,
    deleteItemFromCart: cartReducer,
    updateQuantity: cartReducer,
    newInvoice: cartReducer,
    getInventory: browseItemsReducer,
    getItemDetails: itemDetailsReducer,
    setThisItem: browseItemsReducer,
    login: loginReducer
});