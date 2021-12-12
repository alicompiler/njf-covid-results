import React from "react";
import {FileUploadBox} from "./FileUploadBox";
import {connect} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";
import {UploadReducerState} from "../../Data/UploadReducer";
import {DispatchableProps} from "../../../../Core/Dispatchable";
import {DefaultImportService, ImportService} from "../../Service/ImportService";
import {withTranslation, WithTranslationProps} from "react-i18next";
import {ImportActions} from "../../Data/ImportActions";

interface Props extends UploadReducerState, DispatchableProps, WithTranslationProps {

}

class FileUploadBoxContainer extends React.Component<Props> {

    private importDataService: ImportService;
    private dateInputRef : HTMLInputElement | null = null;

    constructor(props: Props) {
        super(props);
        this.importDataService = new DefaultImportService(this.props);
    }

    componentDidMount() {
    }

    render() {
        const {i18n} = this.props;
        return <div>
            <div className={'flex justify-between'}>
                <input placeholder={i18n?.t('date')}
                       value={this.props.date}
                       ref={ref => this.dateInputRef = ref}
                       className={'p-4 border-2 rounded'} type={'date'}
                       onChange={e => this.props.dispatch(ImportActions.setDate(e.target.value))}/>
                <button className={'p-4 bg-primary font-bold text-white rounded hover:bg-primary-light'}
                        onClick={this.upload}>
                    {i18n?.t('upload')}
                </button>
            </div>
            <div className={'p-2'}/>
            <FileUploadBox uploading={this.props.uploading}
                           uploadProgress={this.props.uploadProgress ?? 0}
                           file={this.props.file}
                           onUpload={this.onFileSelected}/>
        </div>
    }

    private onFileSelected = async (files: any[]) => {
        if (files && files.length > 0) {
            this.props.dispatch(ImportActions.setFile(files[0]));
        }
    }

    private upload = async () => {
        if (!this.props.file) {
            //TODO : display better alter
            alert('select file first');
            return;
        }
        if (!this.props.date) {
            //TODO : display better alter
            alert('select date first');
            return;
        }
        this.props.dispatch(ImportActions.startUpload())
        await this.importDataService.import(this.props.file, this.props.date,
            () => {
                this.props.dispatch(ImportActions.finishUpload())
                this.props.dispatch(ImportActions.clear());
            },
            () => {
                this.props.dispatch(ImportActions.finishUpload())
                alert('Upload Fail')
            }
        );
    }
}


const ReduxConnected = connect((state: ReduxState): Omit<Props, keyof DispatchableProps> => {
    return {...state.Upload}
})(FileUploadBoxContainer);

export default withTranslation()(ReduxConnected);