import React, {useRef} from 'react';
import {SearchIcon} from "@heroicons/react/solid";

export function SearchBox() {
    const inputRef = useRef<HTMLInputElement>(null);
    return <div className={'p-4 border-2 border-gray-500 w-full rounded flex items-center cursor-text'}
                onClick={() => inputRef.current?.focus()}>
        <SearchIcon onClick={() => inputRef.current?.focus()} className={'w-8 h-8 text-gray-600 cursor-pointer'}/>
        <span className={'block w-4'}/>
        <input ref={inputRef} className={'p-0 text-4xl w-full text-gray-700 border-0 outline-none'}
               placeholder={'search by name or phone ...'}/>
    </div>
}