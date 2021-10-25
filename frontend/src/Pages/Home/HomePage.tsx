import React from "react";
import {Divider} from "../../Shared/Divider";
import ExcelFileUploadBox from "./Components/FileUploadBoxContainer";
import {AdvanceSearchModal} from "./Components/AdvanceSearchModal/AdvanceSearchModal";
import {DispatchableProps} from "../../Core/Dispatchable";
import {connect} from "react-redux";
import {SearchResult} from "./Components/SearchResult";
import {ReduxState} from "../../Root/Redux/Reducers";
import {Patient} from "./Data/Patient";
import {SearchArea} from "./Components/SearchArea";

interface Props extends DispatchableProps {
    searchResult?: Patient[];
    searchError: any;
    searching: boolean;
}

class HomePage extends React.Component<Props> {
    render(): any {
        return <div>
            <SearchArea/>

            <Divider/>
            {
                this.props.searching &&
                <div className={'flex justify-center'}>
                    <img alt={'loading'} src="/ripple.svg"/>
                </div>
            }
            {
                (!this.props.searching && this.props.searchResult === undefined) &&
                <ExcelFileUploadBox/>
            }
            {
                (!this.props.searching && this.props.searchResult !== undefined) &&
                <SearchResult items={this.props.searchResult}/>
            }
            {
                (!this.props.searching && this.props.searchError) &&
                <h1 className={'text-red-500'}>Error In Search</h1>
            }

            <AdvanceSearchModal/>
        </div>
    }
}

export default connect((store: ReduxState) => {
    return {
        searching: store.Search.searching,
        searchError: store.Search.searchError,
        searchResult: store.Search.searchResult
    }
})(HomePage)