import {Component} from "react";
import {DispatchableProps} from "../../Core/Dispatchable";
import {connect} from "react-redux";
import {ReduxState} from "../../Root/Redux/Reducers";
import {SearchBox} from "./Components/SearchBox";
import {SearchActions} from "./Data/SearchActions";

interface Props extends DispatchableProps {
    query: string;
    disable: boolean;
}

class SearchBoxContainer extends Component<Props> {
    render() {
        return <SearchBox disabled={this.props.disable}
                          value={this.props.query}
                          onEnterPressed={_ => this.props.dispatch(SearchActions.simpleSearch())}
                          onChange={v => this.props.dispatch(SearchActions.setSearchQuery(v))}/>
    }
}

export default connect((store: ReduxState) => {
    return {
        query: store.Search.query,
        disable: store.Search.searching
    }
})(SearchBoxContainer)