import React, {Component} from "react";
import {XIcon} from "@heroicons/react/solid";

interface Props {
    onClose?: () => void;
    closeButtonPosition? : "right" | "left";
    title: string;
    titlePosition? : "center" | "start" | "end";
}

export class ModalHeader extends Component<Props> {
    render() {
        return <div className={`justify-center items-${this.props.titlePosition ?? "start"}} relative`}>
            <h1 className={'text-2xl'}>{this.props.title}</h1>
            {
                this.props.onClose &&
                <a className={'absolute top-0 right-0'} onClick={() => this.props}>
                    <XIcon className={'w-8 h-8 text-red-500 cursor-pointer'}/>
                </a>
            }
        </div>;
    }
}