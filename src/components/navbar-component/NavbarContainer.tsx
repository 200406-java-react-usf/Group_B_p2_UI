import { IState } from "../../reducers";
import NavbarComponent from "./NavbarComponent";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/logout-action"

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        cart: state.addItemToCart.cartItems,
        errorMessage: state.logout.errorMessage
        
    }
}

const mapDispatchToProps = {
    logoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);