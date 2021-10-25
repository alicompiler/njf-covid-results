import {ReduxAction} from "../../../Root/Redux/ReduxAction";

export enum ImportActionType {
    UPDATE_PROGRESS = "UPDATE_PROGRESS",
    START_UPLOAD = "START_UPLOAD",
    FINISH_UPLOAD = "FINISH_UPLOAD",
    SET_FILE = "SET_FILE",
    SET_DATE = "SET_DATE",
    CLEAR_DATA = "CLEAR_DATA"
}


export class ImportActions {
    public static setFile(file: any): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.SET_FILE,
            payload: file
        };
    }

    public static setDate(date: string): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.SET_DATE,
            payload: date
        };
    }

    public static clear(): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.CLEAR_DATA,
            payload: undefined
        };
    }

    public static startUpload(): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.START_UPLOAD,
            payload: undefined
        }
    }

    public static finishUpload(): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.FINISH_UPLOAD,
            payload: undefined
        }
    }


    public static updateUploadProgress(progress:number): ReduxAction<ImportActionType> {
        return {
            type: ImportActionType.UPDATE_PROGRESS,
            payload: progress
        }
    }
}