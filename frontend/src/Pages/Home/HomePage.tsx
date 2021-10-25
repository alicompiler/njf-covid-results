import React from "react";
import {Divider} from "../../Shared/Divider";
import {AdjustmentsIcon} from "@heroicons/react/outline"
import {HorizontalDivider} from "../../Shared/HorizontalDivider";
import ExcelFileUploadBox from "./Containers/FileUploadBoxContainer";
import AdvanceSearchModal from "./Components/AdvanceSearchModal";
import {DispatchableProps} from "../../Core/Dispatchable";
import {connect} from "react-redux";
import {SearchActions} from "./Data/SearchActions";
import {SearchResult} from "./Components/SearchResult";
import SearchBoxContainer from "./SearchBoxContainer";
import {ReduxState} from "../../Root/Redux/Reducers";
import {Patient} from "./Data/Patient";

interface Props extends DispatchableProps {
    searchResult?: Patient[];
    searchError: any;
    searching: boolean;
}

class HomePage extends React.Component<Props> {
    render(): any {
        return <div>
            <div className="px-16 py-8 md:px-32 md:py-32">
                <div className={'flex items-center'}>
                    <SearchBoxContainer/>
                    <HorizontalDivider/>
                    <a href={"#"} className={'cursor-pointer p-2 border-2 border-gray-500 rounded'}
                       onClick={() => this.props.dispatch(SearchActions.openAdvanceSearchModal())}>
                        <AdjustmentsIcon className={'w-16 h-16'}/>
                    </a>
                    <HorizontalDivider/>
                </div>
            </div>
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
            <AdvanceSearchModal onSearch={() => this.props.dispatch(SearchActions.advanceSearch())}
                                handleClose={() => this.props.dispatch(SearchActions.closeAdvanceSearchModal())}/>
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