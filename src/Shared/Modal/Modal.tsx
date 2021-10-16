import React from "react";
import {Divider} from "../Divider";

export interface ModalProps {
    content: () => any;
    actions?: () => any;
    header?: () => any;
}

export class Modal extends React.Component<ModalProps> {
    render() {
        return <div className="fixed z-50 inset-0 overflow-y-auto">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

            <div className="flex items-center justify-center min-h-screen text-center">

                <div className="p-4 w-1/2 bg-white rounded-lg shadow-xl transform transition-all">

                    {
                        this.props.header &&
                        <>
                            {this.props.header()}
                            <Divider/>
                        </>
                    }

                    {
                        this.props.content()
                    }
                    <Divider/>

                    <div className={'flex items-center justify-center py-4'}>
                        <button type="button"
                                className="inline-flex w-1/2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700">
                            Search
                        </button>
                    </div>
                </div>


            </div>

        </div>;
    }
}