import {DispatchableProps} from "../../../Core/Dispatchable";
import {Axios} from "axios";
import {DefaultUrlManager, UrlManager} from "../../../Server/UrlManager";
import {Endpoints} from "../../../Server/Endpoints";
import {FinishUploadAction, StartUploadAction, UpdateUploadProgressAction} from "../Data/ImportDataActions";


export interface ImportDataService {
    import(data: any, onUpload?: () => void, onFail?: () => void): Promise<any>;
}

export class DefaultImportDataService implements ImportDataService {

    private readonly dispatchable: DispatchableProps;
    private readonly urlManager: UrlManager;

    constructor(dispatchable: DispatchableProps) {
        this.dispatchable = dispatchable;
        this.urlManager = new DefaultUrlManager();
    }

    public async import(excelFile: any, onUpload?: () => void, onFail?: () => void): Promise<any> {
        const axiosClient = new Axios();
        const url = this.urlManager.getEndpoint(Endpoints.ImportExcel);
        const data = new FormData();

        this.dispatchable.dispatch(new StartUploadAction());
        try {
            await axiosClient.post(url, data, {onUploadProgress: this.onUploadProgress});
            onUpload?.();
        } catch (e) {
            onFail?.();
        }
        this.dispatchable.dispatch(new FinishUploadAction());
    }

    private onUploadProgress = (progressEvent: any) => {
        const {loaded, total} = progressEvent;
        const progress = Math.floor(loaded / total * 100);
        this.dispatchable.dispatch(new UpdateUploadProgressAction(progress).toActionObject());
    }
}

export class FakeImportDataService implements ImportDataService {

    private readonly dispatchable: DispatchableProps;

    constructor(dispatchable: DispatchableProps) {
        this.dispatchable = dispatchable;
    }

    import(data: any, onUpload?: () => void, onFail?: () => void): Promise<void> {
        return new Promise(resolve => {
            this.dispatchable.dispatch(new StartUploadAction().toActionObject());
            let progress = 0;
            let intervalId = setInterval(() => {
                if (progress >= 100) {
                    this.dispatchable.dispatch(new FinishUploadAction().toActionObject());
                    clearInterval(intervalId);
                    resolve();
                    return;
                }
                progress += 5;
                this.dispatchable.dispatch(new UpdateUploadProgressAction(progress).toActionObject());
            }, 500);
        });
    }
}