export function SearchResultTableHeader() {
    //TODO : support multi-localization (fixing text-right)
    return <thead className="bg-gray-100">
    <tr>
        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            Patient
        </th>
        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            Result
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            Source / Status
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            Date
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            Note/SMS Status
        </th>

        <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
        </th>
    </tr>
    </thead>;
}