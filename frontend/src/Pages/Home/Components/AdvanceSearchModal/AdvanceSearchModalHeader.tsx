import {SearchActions} from "../../Data/SearchActions";
import {XIcon} from "@heroicons/react/solid";
import React from "react";
import {useDispatch} from "react-redux";

export function AdvanceSearchModalHeader() {
    const dispatch = useDispatch();
    return <div className={'justify-center items-center relative'}>
        <h1 className={'text-2xl'}>بحث متقدم</h1>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={'absolute top-0 right-0'}
           onClick={() => dispatch(SearchActions.closeAdvanceSearchModal())}>
            <XIcon className={'w-8 h-8 text-red-500 cursor-pointer'}/>
        </a>
    </div>
}