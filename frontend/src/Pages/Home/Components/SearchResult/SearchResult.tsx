import {SearchResultTable} from "./SearchResultTable";
import {XIcon} from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import {SearchActions} from "../../Data/SearchActions";

export function SearchResult() {
    const dispatch = useDispatch();
    return <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div className={'flex justify-end pb-4'}>
                        <a className={'p-4 cursor-pointer'} onClick={() => dispatch(SearchActions.clearResult())}>
                            <XIcon className={'w-8 h-8'}/>
                        </a>
                    </div>
                    <SearchResultTable/>
                </div>
            </div>
        </div>
    </div>;
}