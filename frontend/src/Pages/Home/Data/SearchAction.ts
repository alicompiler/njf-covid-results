import {ReduxAction} from "../../../Root/Redux/ReduxAction";

export enum SearchActionType {
    SEARCH_STARTED = "SearchActionType@SEARCH_START",
    SEARCH_FAILED = "SearchActionType@SEARCH_FAILED",
    SEARCH_COMPLETED = "SearchActionType@SEARCH_COMPLETE",
    OPEN_ADVANCE_SEARCH_MODAL = "SearchActionType@OPEN_ADVANCE_SEARCH_MODAL",
    CLOSE_ADVANCE_SEARCH_MODAL = "SearchActionType@CLOSE_ADVANCE_SEARCH_MODAL",
    FILL_ADVANCE_SEARCH_FORM = "SearchActionType@FILL_ADVANCE_SEARCH_FORM",
    SET_SEARCH_QUERY = "SearchActionType@SET_SEARCH_QUERY",
    CLEAR_RESULT = "SearchActionType@CLEAR_RESULT",
}

export interface SearchAction<TPayload = any> extends ReduxAction<SearchActionType, TPayload> {
}