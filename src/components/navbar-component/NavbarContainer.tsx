import { IState } from "../../reducers";
import NavbarComponent from "./NavbarComponent";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/logout-action"

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        itemCount: state.logout.itemCount,
        errorMessage: state.logout.errorMessage
        
    }
}

const mapDispatchToProps = {
    logoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);