import {ReduxActionBase} from "../../../Root/Redux/ReduxAction";

export enum ImportActionType {
    UPDATE_PROGRESS = "UPDATE_PROGRESS",
    START_UPLOAD = "START_UPLOAD",
    FINISH_UPLOAD = "FINISH_UPLOAD"
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