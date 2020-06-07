import { IState } from "../../reducers";
import { connect } from "react-redux";
import NewItemComponent from "./NewItemComponent";
import { newItemAction } from "../../actions/new-item-action";


const mapStateToProps = (state: IState) => {
    return {
        newItem: state.addNewItem.newItem
    }
}

const mapDispatchToProps = {
    newItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItemComponent);