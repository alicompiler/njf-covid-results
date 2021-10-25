import {useSelector} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";

export function UploadProgressIndicator() {
    const uploadProgress = useSelector((state : ReduxState) => state.Upload.uploadProgress);
    return <div className={"flex items-center flex-col w-full"}>
        <p className={'text-2xl py-2'}>جاري رفع الملف۔۔۔</p>
        <div className="relative pt-1 w-full">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-light">
                <div style={{width: `${uploadProgress}%`}}
                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"/>
            </div>
        </div>
        <p className={'text-2xl py-2'}>{uploadProgress}%</p>
    </div>
}