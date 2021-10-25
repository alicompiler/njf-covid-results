import {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import {UploadProgressIndicator} from "./UploadProgressIndicator";
import {UploadBoxMessage} from "./UploadBoxMessage";


interface Props {
    onUpload: (file: any[]) => void;
    uploading: boolean;
    uploadProgress: number;
    file?: any;
}

export function FileUploadBox(props: Props) {

    const onDrop = useCallback(acceptedFiles => {
        props.onUpload(acceptedFiles);
    }, [props]);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div className={'bg-gray-200 py-32 px-8 w-full flex items-center justify-center'} {...getRootProps()}>
            {
                !props.uploading && <input {...getInputProps()} />
            }
            {
                props.uploading ? <UploadProgressIndicator/> : <UploadBoxMessage/>
            }
        </div>
    )

}