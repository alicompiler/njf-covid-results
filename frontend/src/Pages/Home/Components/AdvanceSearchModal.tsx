import React, {BaseSyntheticEvent} from "react";
import {LabeledInput} from "./LabeledInput";
import {Divider} from "../../../Shared/Divider";
import {XIcon} from "@heroicons/react/solid"
import {AdvanceSearchForm} from "../Data/SearchReducer";
import {DispatchableProps} from "../../../Core/Dispatchable";
import {connect} from "react-redux";
import {ReduxState} from "../../../Root/Redux/Reducers";
import {SearchActions} from "../Data/SearchActions";


interface Props extends DispatchableProps {
    form: AdvanceSearchForm;
    open: boolean;
    onSearch: () => void;
    handleClose: () => void;
}

class AdvanceSearchModal extends React.Component<Props> {
    render() {
        if (!this.props.open) {
            return null;
        }
        const {form} = this.props;
        return <div className="fixed z-50 inset-0 overflow-y-auto">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

            <div className="flex items-center justify-center min-h-screen text-center">

                <div className="p-4 w-1/2 bg-white rounded-lg shadow-xl transform transition-all">

                    <div className={'justify-center items-center relative'}>
                        <h1 className={'text-2xl'}>Advance Search</h1>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={'absolute top-0 right-0'}
                           onClick={() => this.props.dispatch(SearchActions.closeAdvanceSearchModal())}>
                            <XIcon className={'w-8 h-8 text-red-500 cursor-pointer'}/>
                        </a>
                    </div>

                    <Divider/>

                    <form autoComplete={'off'} className={'py-4 flex flex-col'}>
                        <div className={'flex'}>
                            {AdvanceSearchModal.buildSearchInput('Name', form.name, 'search', this.changeCallback('name'))}
                            {AdvanceSearchModal.buildSearchInput('Phone', form.phone, 'phone', this.changeCallback('phone'))}
                        </div>
                        <div className={'flex'}>
                            {AdvanceSearchModal.buildSearchInput('From Date', form.fromDate, 'date', this.changeCallback('fromDate'))}
                            {AdvanceSearchModal.buildSearchInput('To Date', form.toDate, 'date', this.changeCallback('toDate'))}
                        </div>
                        <div className={'flex '}>
                            {AdvanceSearchModal.buildSearchInput('Source', form.source, 'search', this.changeCallback('source'))}
                            {AdvanceSearchModal.buildSearchInput('Status', form.status, 'search', this.changeCallback('status'))}
                            {AdvanceSearchModal.buildSearchInput('Result', form.result, 'search', this.changeCallback('result'))}
                        </div>
                    </form>

                    <Divider/>

                    <div className={'flex items-center justify-center py-4'}>
                        <button type="button" onClick={() => {
                            this.props.onSearch();
                            this.props.handleClose();
                        }}
                                className="inline-flex w-1/2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700">
                            Search
                        </button>
                    </div>
                </div>


            </div>

        </div>;
    }

    private changeCallback = (propertyKey: keyof AdvanceSearchForm): (value: string) => void => {
        return (value: string) => this.props.dispatch(SearchActions.fillAdvanceSearchForm(propertyKey, value));
    }

    private static buildSearchInput(label: string, value: string, type: string, onChange: (value: string) => void): any {
        return <LabeledInput wrapperClassName={'p-4 flex-1'}
                             inputClassName={'input-form text-xl border-2 rounded p-2'}
                             inputProps={{autoComplete: 'Nope', type: type}}
                             label={label}
                             value={value}
                             labelClassName={'flex'}
                             onChange={(e: any) => onChange(e.target.value)}/>
    }

}


export default connect((store: ReduxState) => {
    return {
        form: store.Search.advanceSearchForm,
        open: store.Search.isAdvanceSearchModalOpen
    }
})(AdvanceSearchModal)