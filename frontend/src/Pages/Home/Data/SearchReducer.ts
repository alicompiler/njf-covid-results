import {SearchAction, SearchActionType} from "./SearchAction";
import {Patient} from "./Patient";

export interface AdvanceSearchForm {
    name: string;
    phone: string;
    fromDate: string;
    toDate: string;
    source: string;
    status: string;
    result: string;
    advanceSearch: true;
}

export interface SearchReducerState {
    query: string;
    advanceSearchForm: AdvanceSearchForm;
    isAdvanceSearchModalOpen: boolean;
    searching: boolean;
    searchResult?: Patient[];
    searchError: any;
}

export const searchReducerInitialState: SearchReducerState = {
    advanceSearchForm: {
        advanceSearch: true,
        name: '',
        phone: '',
        fromDate: '',
        toDate: '',
        result: '',
        source: '',
        status: ''
    },
    query: '',
    isAdvanceSearchModalOpen: false,
    searching: false,
    searchError: null
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
        case SearchActionType.SEARCH_STARTED:
            return {
                ...state,
                searching: true, searchResult: undefined, searchError: null
            };
        case SearchActionType.SEARCH_FAILED:
            return {
                ...state,
                searching: false, searchResult: undefined, searchError: action.payload
            };
        case SearchActionType.SEARCH_COMPLETED:
            return {
                ...state,
                searching: false, searchError: null, searchResult: action.payload
            };
        case SearchActionType.SET_SEARCH_QUERY:
            return {...state, query: action.payload};

        case SearchActionType.CLEAR_RESULT:
            return {...state, searchResult: undefined};
    }
    return state;
}