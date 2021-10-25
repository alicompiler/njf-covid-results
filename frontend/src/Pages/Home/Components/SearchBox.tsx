import React, {useRef, useState} from 'react';
import {SearchIcon} from "@heroicons/react/solid";
import {useTranslation} from "react-i18next";


interface Props {
    value: string;
    onChange: (value: string) => void;
    onEnterPressed: (value: string) => void;
    disabled?: boolean;
}

export function SearchBox(props: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const {t} = useTranslation();
    const [value, setValue] = useState('');
    return <div className={'p-4 border-2 border-gray-500 w-full rounded flex items-center cursor-text'}
                onClick={() => inputRef.current?.focus()}>
        <SearchIcon onClick={() => inputRef.current?.focus()} className={'w-8 h-8 text-gray-600 cursor-pointer'}/>
        <span className={'block w-4'}/>
        <input ref={inputRef}
               disabled={props.disabled}
               value={value}
               onKeyUp={e => e.key === "Enter" && props.onEnterPressed(value)}
               onChange={(e) => {
                   const value = e.target.value;
                   setValue(value);
                   props.onChange(value);
               }}
               className={'p-0 text-4xl w-full text-gray-700 border-0 outline-none'}
               placeholder={t('search_by_name_or_phone')}/>
    </div>
}