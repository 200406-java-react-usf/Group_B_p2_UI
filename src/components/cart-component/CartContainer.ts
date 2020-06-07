import { IState } from "../../reducers";
import { connect } from "react-redux";
import CartComponent from "./CartComponent";
import {cartAction} from "../../actions/cart-actions"
import {detailsAction} from "../../actions/item-details-actions"


const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        cart: state.setCartItems.cartItems
    }
}

const mapDispatchToProps = {
    cartAction,
    detailsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);