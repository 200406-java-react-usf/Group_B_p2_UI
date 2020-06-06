import { IState } from "../../reducers";
import { connect } from "react-redux";
import CartComponent from "./CartComponent";
import {cartAction} from "../../actions/cart-actions"


const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        cart: state.setCartItems.cartItems
    }
}

const mapDispatchToProps = {
    cartAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);