import React from "react";
import {SearchBox} from "./Components/SearchBox";
import {Divider} from "../Shared/Divider";
import {AdjustmentsIcon} from "@heroicons/react/outline"
import {PlusIcon} from "@heroicons/react/outline"
import {HorizontalDivider} from "../Shared/HorizontalDivider";
import ExcelFileUploadBox from "./Components/ImportExcelFileBox";

export class HomePage extends React.Component<any, any> {
    render(): any {
        return <div>
            <div className="px-16 py-8 md:px-32 md:py-32">
                <div className={'flex items-center'}>
                    <SearchBox/>
                    <HorizontalDivider/>
                    <a href={"#"} className={'cursor-pointer p-2 border-2 border-gray-500 rounded'}
                       onClick={() => undefined}>
                        <AdjustmentsIcon className={'w-16 h-16'}/>
                    </a>
                    <HorizontalDivider/>
                    {/*TODO : MOVE TO SHARED COMPONENTS*/}
                    <a href={"#"} className={'cursor-pointer p-2 border-2 border-gray-500 rounded'}
                       onClick={() => undefined}>
                        <PlusIcon className={'w-16 h-16'}/>
                    </a>
                </div>
            </div>
            <Divider/>
            <ExcelFileUploadBox/>
        </div>
    }
}