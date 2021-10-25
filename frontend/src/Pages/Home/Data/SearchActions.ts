import {SearchAction, SearchActionType} from "./SearchAction";
import {AdvanceSearchForm} from "./SearchReducer";
import {DefaultPatientService, PatientService} from "../Service/PatientService";
import {ReduxState} from "../../../Root/Redux/Reducers";
import {Patient} from "./Patient";

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

    public static recent(): any {
        return SearchActions.getPatients((service) => service.getPatients());
    }

    public static simpleSearch(): any {
        return SearchActions.getPatients((service, store) => service.getPatients(store.Search.query));
    }

    public static advanceSearch(): any {
        return SearchActions.getPatients((service, store) => service.advanceSearch(store.Search.advanceSearchForm));
    }

    private static getPatients(buildPatientPromise: (patientService: PatientService, store: ReduxState) => Promise<Patient[]>): any {
        return function (dispatch: (action: SearchAction) => void, getStore: () => ReduxState) {
            const patientService = new DefaultPatientService();
            dispatch(SearchActions.searchStarted());
            buildPatientPromise(patientService, getStore())
                .then(patients => dispatch(SearchActions.searchCompleted(patients)))
                .catch(e => dispatch(SearchActions.searchFailed(e)))
        };
    }

    private static searchStarted(): SearchAction {
        return {
            type: SearchActionType.SEARCH_STARTED,
            payload: undefined
        };
    }

    private static searchCompleted(patients: Patient[]): SearchAction {
        return {
            type: SearchActionType.SEARCH_COMPLETED,
            payload: patients
        };
    }

    private static searchFailed(error: any): SearchAction {
        return {
            type: SearchActionType.SEARCH_FAILED,
            payload: error
        };
    }

    public static setSearchQuery(query: string): SearchAction {
        return {
            type: SearchActionType.SET_SEARCH_QUERY,
            payload: query
        };
    }
}

