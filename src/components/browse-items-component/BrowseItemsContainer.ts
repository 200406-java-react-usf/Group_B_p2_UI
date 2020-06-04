import { IState } from "../../reducers";
import { connect } from "react-redux";
import BrowseItemsComponent from "./BrowseItemsComponent";
import { browseAction } from "../../actions/browse-items";


const mapStateToProps = (state: IState) => {
    return {
        thisItem: state.setThisItem.thisItem
    }
}

const mapDispatchToProps = {
    browseAction
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItemsComponent);