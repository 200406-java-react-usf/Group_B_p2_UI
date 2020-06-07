import { IState } from "../../reducers";
import { connect } from "react-redux";
import CartComponent from "./CartComponent";
import {cartAction} from "../../actions/cart-actions"
import {detailsAction} from "../../actions/item-details-actions"
import {registerAction} from "../../actions/register-actions"


const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        cart: state.setCartItems.cartItems
    }
}

const mapDispatchToProps = {
    cartAction,
    detailsAction,
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);