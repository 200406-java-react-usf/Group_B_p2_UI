import { IState } from "../../reducers";
import { connect } from "react-redux";
import ItemDetailsComponent from "./ItemDetailsComponent";


const mapStateToProps = (state: IState) => {
    return {
        thisItem: state.setThisItem.thisItem
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsComponent);