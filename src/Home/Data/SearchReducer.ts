import {SearchAction, SearchActionType} from "./SearchAction";

export interface AdvanceSearchForm {
    name: string;
    phone: string;
    fromDate: string;
    toDate: string;
    source: string;
    status: string;
    result: string;
}

export interface SearchReducerState {
    advanceSearchForm: AdvanceSearchForm;
    isAdvanceSearchModalOpen: boolean;
}

export const searchReducerInitialState: SearchReducerState = {
    advanceSearchForm: {
        name: '',
        phone: '',
        fromDate: '',
        toDate: '',
        result: '',
        source: '',
        status: ''
    },
    isAdvanceSearchModalOpen: false
}

export const SearchReducer = function (state: SearchReducerState = searchReducerInitialState, action: SearchAction): SearchReducerState {
    switch (action.type) {
        case SearchActionType.CLOSE_ADVANCE_SEARCH_MODAL:
            return {...state, isAdvanceSearchModalOpen: false};
        case SearchActionType.OPEN_ADVANCE_SEARCH_MODAL:
            return {...state, isAdvanceSearchModalOpen: true};
        case SearchActionType.FILL_ADVANCE_SEARCH_FORM:
            return {
                ...state,
                advanceSearchForm: {...state.advanceSearchForm, [action.payload.key]: action.payload.value}
            }
    }
    return state;
}