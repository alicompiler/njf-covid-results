import React from "react";
import {useDispatch} from "react-redux";
import {SearchActions} from "../../Data/SearchActions";

export function AdvanceSearchModalActionArea(){
    const dispatch = useDispatch();
    let onSearch = () => {
        dispatch(SearchActions.closeAdvanceSearchModal());
        dispatch(SearchActions.advanceSearch());
    };
    return <div className={'flex items-center justify-center py-4'}>
        <button type="button" onClick={onSearch}
                className="inline-flex w-1/2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700">
            بحث
        </button>
    </div>
}