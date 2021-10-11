import {UploadReducer, UploadReducerState} from "../../Home/Data/UploadReducer";
import {ReduxAction} from "./ReduxAction";

export interface ReduxState {
    Upload: UploadReducerState;
}

type ReducersObject = {
    [key in keyof ReduxState]: (state: any, action: ReduxAction<any>) => any
};

export const Reducers: ReducersObject = {
    Upload: UploadReducer
};