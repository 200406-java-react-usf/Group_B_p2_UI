import { IState } from "../../reducers";
import { connect } from "react-redux";
import ItemDetailsComponent from "./ItemDetailsComponent";
import {detailsAction} from "../../actions/item-details-actions"


const mapStateToProps = (state: IState) => {
    return {
        thisItem: state.setThisItem.thisItem
    }
}

const mapDispatchToProps = {
    detailsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsComponent);