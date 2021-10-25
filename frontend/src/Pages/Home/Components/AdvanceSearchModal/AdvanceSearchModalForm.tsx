import React from "react";
import {AdvanceSearchModalFormInput} from "./AdvanceSearchModalFormInput";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";
import {SearchActions} from "../../Data/SearchActions";
import {AdvanceSearchForm} from "../../Data/SearchReducer";

export function AdvanceSearchModalForm() {
    const form = useSelector((state: ReduxState) => state.Search.advanceSearchForm);
    const dispatch = useDispatch();
    const changeCallback = (propertyKey: keyof AdvanceSearchForm) => (value: string) => dispatch(SearchActions.fillAdvanceSearchForm(propertyKey, value));

    return <form autoComplete={'off'} className={'py-4 flex flex-col'}>
        <div className={'flex'}>
            <AdvanceSearchModalFormInput label={'Name'} type={'search'} value={form.name}
                                         onChange={changeCallback('name')}/>
            <AdvanceSearchModalFormInput label={'Phone'} type={'phone'} value={form.phone}
                                         onChange={changeCallback('phone')}/>
        </div>
        <div className={'flex'}>
            <AdvanceSearchModalFormInput label={'From Date'} type={'date'} value={form.fromDate}
                                         onChange={changeCallback('fromDate')}/>
            <AdvanceSearchModalFormInput label={'To Date'} type={'date'} value={form.toDate}
                                         onChange={changeCallback('toDate')}/>
        </div>
        <div className={'flex '}>
            <AdvanceSearchModalFormInput label={'Source'} type={'search'} value={form.source}
                                         onChange={changeCallback('source')}/>
            <AdvanceSearchModalFormInput label={'Status'} type={'search'} value={form.status}
                                         onChange={changeCallback('status')}/>
            <AdvanceSearchModalFormInput label={'Result'} type={'search'} value={form.result}
                                         onChange={changeCallback('result')}/>
        </div>
    </form>

}