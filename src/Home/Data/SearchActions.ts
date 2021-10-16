import {SearchAction, SearchActionType} from "./SearchAction";
import {AdvanceSearchForm} from "./SearchReducer";

export class SearchActions {

    public static openAdvanceSearchModal(): SearchAction {
        return {
            type: SearchActionType.OPEN_ADVANCE_SEARCH_MODAL,
            payload: null
        }
    }

    public static closeAdvanceSearchModal(): SearchAction {
        return {
            type: SearchActionType.CLOSE_ADVANCE_SEARCH_MODAL,
            payload: null
        }
    }

    public static fillAdvanceSearchForm(property: keyof AdvanceSearchForm, value: string): SearchAction {
        return {
            type: SearchActionType.FILL_ADVANCE_SEARCH_FORM,
            payload: {
                key: property,
                value: value
            }
        };
    }

}

