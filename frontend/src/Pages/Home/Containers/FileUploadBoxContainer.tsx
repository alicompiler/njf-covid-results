import React from "react";
import {FileUploadBox} from "../Components/FileUploadBox";
import {connect} from "react-redux";
import {ReduxState} from "../../../Root/Redux/Reducers";
import {UploadReducerState} from "../Data/UploadReducer";
import {DispatchableProps} from "../../../Core/Dispatchable";
import {FakeImportDataService, ImportDataService} from "../Service/ImportDataService";

interface Props extends UploadReducerState, DispatchableProps {

}

class FileUploadBoxContainer extends React.Component<Props> {

    private importDataService: ImportDataService;

    constructor(props: Props) {
        super(props);
        this.importDataService = new FakeImportDataService(this.props);
    }

    render() {
        return <FileUploadBox uploading={this.props.uploading}
                              uploadProgress={this.props.uploadProgress ?? 0}
                              onUpload={this.onUpload}/>
    }

    private onUpload = async (files: any[]) => {
        if (files && files.length === 0) {
            await this.importDataService.import(files[0]);
        }
    }
}


export default connect((state: ReduxState): Omit<Props, keyof DispatchableProps> => {
    return {...state.Upload}
})(FileUploadBoxContainer);