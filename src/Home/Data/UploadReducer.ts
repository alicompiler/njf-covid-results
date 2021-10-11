import {ReduxAction} from "../../Root/Redux/ReduxAction";
import {ImportActionType} from "./ImportDataActions";

export interface UploadReducerState {
    uploading: boolean;
    uploadProgress?: number;
    file?: any;
}


export const uploadReducerInitialState: UploadReducerState = {
    uploading: false,
}

export const UploadReducer = function (state: UploadReducerState = uploadReducerInitialState, action: ReduxAction<ImportActionType>): UploadReducerState {
    switch (action.type) {
        case ImportActionType.FINISH_UPLOAD:
            return {...state, uploading: false, uploadProgress: undefined};
        case ImportActionType.START_UPLOAD:
            return {...state, uploading: true, uploadProgress: 0};
        case ImportActionType.UPDATE_PROGRESS:
            return {...state, uploadProgress: action.payload};
    }
    return state;
}