import React from "react";
import {SearchBox} from "./Components/SearchBox";
import {Divider} from "../Shared/Divider";
import {AdjustmentsIcon} from "@heroicons/react/outline"
import {PlusIcon} from "@heroicons/react/outline"
import {HorizontalDivider} from "../Shared/HorizontalDivider";
import ExcelFileUploadBox from "./Components/ImportExcelFileBox";
import AdvanceSearchModal from "./Components/AdvanceSearchModal";
import {DispatchableProps} from "../Core/Dispatchable";
import {connect} from "react-redux";
import {SearchActions} from "./Data/SearchActions";
import {SearchResult} from "./Components/SearchResult";

interface Props extends DispatchableProps {

}

class HomePage extends React.Component<Props> {
    render(): any {
        return <div>
            <div className="px-16 py-8 md:px-32 md:py-32">
                <div className={'flex items-center'}>
                    <SearchBox/>
                    <HorizontalDivider/>
                    <a href={"#"} className={'cursor-pointer p-2 border-2 border-gray-500 rounded'}
                       onClick={() => this.props.dispatch(SearchActions.openAdvanceSearchModal())}>
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
            <SearchResult items={[
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: '0 '
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: '   '
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes some notes some notes some notes some notes some notes some notes some notes some notes'
                },
                {
                    id: '1',
                    name: 'Ali Faris',
                    phone: '07808130427',
                    result: 'Positive',
                    source: 'Al-Hakeem',
                    date: '2021-01-01',
                    status: 'Suspected',
                    smsStatus: 'Failed',
                    notes: 'some notes'
                },
            ]}/>
            <AdvanceSearchModal/>
        </div>
    }
}

export default connect()(HomePage)