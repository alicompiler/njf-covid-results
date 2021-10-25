import {SearchResultTableHeader} from "./SearchResultTableHeader";
import {SearchResultTableBody} from "./SearchResultTableBody";

export function SearchResultTable() {
    return <table className="min-w-full divide-y divide-gray-200">
        <SearchResultTableHeader/>
        <SearchResultTableBody/>
    </table>;
}