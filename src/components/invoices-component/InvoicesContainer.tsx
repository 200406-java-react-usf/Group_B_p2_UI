import { IState } from "../../reducers";
import { connect } from 'react-redux';
import  InvoicesComponent  from './InvoicesComponent';

const mapStateToProps = (state: IState) =>{
   return {
    authUser: state.login.authUser
   }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesComponent)
