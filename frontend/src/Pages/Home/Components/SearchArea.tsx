import SearchBoxContainer from "../SearchBoxContainer";
import {HorizontalDivider} from "../../../Shared/HorizontalDivider";
import {SearchActions} from "../Data/SearchActions";
import {AdjustmentsIcon} from "@heroicons/react/outline";
import React from "react";
import {useDispatch} from "react-redux";


export function SearchArea() {
    const dispatch = useDispatch();
    return <div className="px-16 py-8 md:px-32 md:py-32">
        <div className={'flex items-center'}>
            <SearchBoxContainer/>
            <HorizontalDivider/>
            {/*TODO : change color*/}
            <a href={"#"} className={'cursor-pointer p-2 border-2 border-gray-500 rounded'}
               onClick={() => dispatch(SearchActions.openAdvanceSearchModal())}>
                <AdjustmentsIcon className={'w-16 h-16'}/>
            </a>
            <HorizontalDivider/>
        </div>
    </div>
}