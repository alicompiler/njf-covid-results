import React, {Component} from "react";
import {HorizontalDivider} from "../../../Shared/HorizontalDivider";

interface Props {
    label: string;
    value: string;
    onChange: (value: any) => void;
    wrapperClassName?: string;
    labelClassName?: string;
    labelProps?: any;
    inputClassName?: string;
    inputType?: string;
    inputProps?: any;
}

export class LabeledInput extends Component<Props> {
    render(): any {
        return <div className={`flex flex-col ${this.props.wrapperClassName ?? ''} `}>
            <label className={this.props.labelClassName}
                   {...(this.props.labelProps ?? {})}>
                {this.props.label}
            </label>
            <HorizontalDivider size={'sm'}/>
            <input type={this.props.inputType}
                   style={{flex: 1}}
                   className={this.props.inputClassName}
                   {...(this.props.inputProps ?? {})}
                   onChange={this.props.onChange}
                   value={this.props.value}
            />
        </div>
    }
}