export interface ReduxAction<TAction, TPayload = any> {
    type: TAction;
    payload: TPayload;
}