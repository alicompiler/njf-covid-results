export interface ReduxAction<TAction, TPayload = any> {
    type: TAction;
    payload: TPayload;
}


export abstract class ReduxActionBase<TAction, TPayload> implements ReduxAction<TAction, TPayload> {
    payload: TPayload;
    type: TAction;

    protected constructor(payload: TPayload, type: TAction) {
        this.payload = payload;
        this.type = type;
    }

    public toActionObject(): ReduxAction<TAction, TPayload> {
        return {
            payload: this.payload,
            type: this.type
        }
    }
}