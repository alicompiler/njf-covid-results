import {ReduxAction, ReduxActionBase} from "../../../Root/Redux/ReduxAction";

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
}


export class StartUploadAction extends ReduxActionBase<ImportActionType, undefined> {
    constructor() {
        super(undefined, ImportActionType.START_UPLOAD);
    }
}

export class FinishUploadAction extends ReduxActionBase<ImportActionType, undefined> {
    constructor() {
        super(undefined, ImportActionType.FINISH_UPLOAD);
    }
}


export class UpdateUploadProgressAction extends ReduxActionBase<ImportActionType, number> {
    constructor(progress: number) {
        super(progress, ImportActionType.UPDATE_PROGRESS);
    }
}