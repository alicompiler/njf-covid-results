import {useCallback} from "react";
import {useDropzone} from "react-dropzone";


interface Props {
    onUpload: (file: any[]) => void;
    uploading: boolean;
    uploadProgress: number;
}

export function FileUploadDraggableBox(props: Props) {

    const onDrop = useCallback(acceptedFiles => {
        props.onUpload(acceptedFiles);
    }, [props])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div className={'bg-gray-200 py-32 px-8 w-full flex items-center justify-center'} {...getRootProps()}>
            {
                !props.uploading && <input {...getInputProps()} />
            }
            {
                props.uploading ?
                    <div className={"flex items-center flex-col w-full"}>
                        <p className={'text-2xl py-2'}>Uploading...</p>
                        <div className="relative pt-1 w-full">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-light">
                                <div style={{width: `${props.uploadProgress}%`}}
                                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"/>
                            </div>
                        </div>
                        <p className={'text-2xl py-2'}>{props.uploadProgress}%</p>
                    </div>
                    :
                    <p>Import Data (drop excel file here or click here)</p>
            }
        </div>
    )

}