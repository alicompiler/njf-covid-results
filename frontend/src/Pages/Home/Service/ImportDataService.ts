import {DispatchableProps} from "../../../Core/Dispatchable";
import Axios from "axios";
import {DefaultUrlManager, UrlManager} from "../../../Server/UrlManager";
import {Endpoints} from "../../../Server/Endpoints";
import {FinishUploadAction, StartUploadAction, UpdateUploadProgressAction} from "../Data/ImportDataActions";


export interface ImportDataService {
    import(data: any , date :string, onUpload?: () => void, onFail?: () => void): Promise<any>;
}

export class DefaultImportDataService implements ImportDataService {

    private readonly dispatchable: DispatchableProps;
    private readonly urlManager: UrlManager;

    constructor(dispatchable: DispatchableProps) {
        this.dispatchable = dispatchable;
        this.urlManager = new DefaultUrlManager();
    }

    public async import(excelFile: any , date : string, onUpload?: () => void, onFail?: () => void): Promise<any> {
        const url = this.urlManager.getEndpoint(Endpoints.importExcel);
        const data = new FormData();
        data.append("excel" , excelFile);
        data.append("date" , date);
        try {
            await Axios.post(url, data);
            onUpload?.();
        } catch (e) {
            onFail?.();
        }
    }
}

export class FakeImportDataService implements ImportDataService {

    private readonly dispatchable: DispatchableProps;

    constructor(dispatchable: DispatchableProps) {
        this.dispatchable = dispatchable;
    }

    import(data: any, date : string, onUpload?: () => void, onFail?: () => void): Promise<void> {
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