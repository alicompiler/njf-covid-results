export function SearchResultTableHeader() {
    //TODO : support multi-localization (fixing text-right)
    return <thead className="bg-gray-100">
    <tr>
        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            الشخص
        </th>
        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            النتيجة
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            المصدر / الحالة
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            التاريخ
        </th>

        <th scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
            الملاحظات/الرسالة النصية
        </th>

        <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">العمليات</span>
        </th>
    </tr>
    </thead>;
}