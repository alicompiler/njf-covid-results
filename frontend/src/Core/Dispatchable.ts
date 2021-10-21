import {ReduxAction} from "../Root/Redux/ReduxAction";


export interface DispatchableProps<TActionType = any, TPayload = any> {
    dispatch: (action: ReduxAction<TActionType, TPayload>) => void;
}