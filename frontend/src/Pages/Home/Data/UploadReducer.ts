import {ReduxAction} from "../../../Root/Redux/ReduxAction";
import {ImportActionType} from "./ImportDataActions";

export interface UploadReducerState {
    uploading: boolean;
    uploadProgress?: number;
    file?: any;
    date?: string;
}

const todayDate = new Date().toISOString().slice(0, 10);
export const uploadReducerInitialState: UploadReducerState = {
    uploading: false,
    date: todayDate
}

export const UploadReducer = function (state: UploadReducerState = uploadReducerInitialState, action: ReduxAction<ImportActionType>): UploadReducerState {
    switch (action.type) {
        case ImportActionType.FINISH_UPLOAD:
            return {...state, uploading: false, uploadProgress: undefined};
        case ImportActionType.START_UPLOAD:
            return {...state, uploading: true, uploadProgress: 0};
        case ImportActionType.UPDATE_PROGRESS:
            return {...state, uploadProgress: action.payload};
        case ImportActionType.SET_FILE:
            return {...state, file: action.payload};
        case ImportActionType.SET_DATE:
            return {...state, date: action.payload};
        case ImportActionType.CLEAR_DATA:
            return {...uploadReducerInitialState}
    }
    return state;
}