import {LabeledInput} from "../LabeledInput";
import React from "react";

interface Props {
    label : string;
    type : string;
    value : string;
    onChange : (value:string) => void;
}

export function AdvanceSearchModalFormInput(props : Props){
    const {type , label , value , onChange} = props;
    return <LabeledInput wrapperClassName={'p-4 flex-1'}
                  inputClassName={'input-form text-xl border-2 rounded p-2'}
                  inputProps={{autoComplete: 'Nope', type: type}}
                  label={label}
                  value={value}
                  labelClassName={'flex'}
                  onChange={(e: any) => onChange(e.target.value)}/>
}