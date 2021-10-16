import {UploadReducer, UploadReducerState} from "../../Home/Data/UploadReducer";
import {ReduxAction} from "./ReduxAction";
import {SearchReducer, SearchReducerState} from "../../Home/Data/SearchReducer";

export interface ReduxState {
    Upload: UploadReducerState;
    Search : SearchReducerState;
}

type ReducersObject = {
    [key in keyof ReduxState]: (state: any, action: ReduxAction<any>) => any
};

export const Reducers: ReducersObject = {
    Upload: UploadReducer,
    Search : SearchReducer,
};