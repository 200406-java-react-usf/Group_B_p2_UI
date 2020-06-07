import { IState } from "../../reducers";
import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import { loginAction } from "../../actions/login-actions";
import { googleLoginAction } from "../../actions/google-login-action";

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.login.errorMessage
    }
}

const mapDispatchToProps = {
    loginAction,
    googleLoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);