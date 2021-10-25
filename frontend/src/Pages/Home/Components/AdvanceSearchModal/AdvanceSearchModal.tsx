import React from "react";
import {Divider} from "../../../../Shared/Divider";
import {useSelector} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";
import {AdvanceSearchModalHeader} from "./AdvanceSearchModalHeader";
import {AdvanceSearchModalForm} from "./AdvanceSearchModalForm";
import {AdvanceSearchModalActionArea} from "./AdvanceSearchModalActionArea";

export function AdvanceSearchModal() {
    const open = useSelector((state: ReduxState) => state.Search.isAdvanceSearchModalOpen);
    if (!open) {
        return null;
    }
    return <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        <div className="flex items-center justify-center min-h-screen text-center">
            <div className="p-4 w-1/2 bg-white rounded-lg shadow-xl transform transition-all">
                <AdvanceSearchModalHeader/>
                <Divider/>
                <AdvanceSearchModalForm/>
                <Divider/>
                <AdvanceSearchModalActionArea/>
            </div>
        </div>
    </div>;
}


