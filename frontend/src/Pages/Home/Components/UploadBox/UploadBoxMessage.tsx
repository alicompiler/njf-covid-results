import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";

export function UploadBoxMessage(){
    const {t} = useTranslation();
    const file = useSelector((state:ReduxState) => state.Upload.file);
    return <div className={'flex flex-col items-center'}>
        {
            file && <h1 className={'text-2xl my-4'}>File Selected</h1>
        }
        <p>{t('import_box_message')}</p>
    </div>;
}