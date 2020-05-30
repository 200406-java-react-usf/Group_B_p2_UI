import { IState } from "../../reducers";
import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import { loginAction } from "../../actions/login-actions";


const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.login.errorMessage
    }
}

const mapDispatchToProps = {
    loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);