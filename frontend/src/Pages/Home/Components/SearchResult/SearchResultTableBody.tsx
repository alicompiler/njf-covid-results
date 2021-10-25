import {HorizontalDivider} from "../../../../Shared/HorizontalDivider";
import {useSelector} from "react-redux";
import {ReduxState} from "../../../../Root/Redux/Reducers";

export function SearchResultTableBody() {
    const items = useSelector((state: ReduxState) => state.Search.searchResult) ?? [];

    return <tbody className="bg-white divide-y divide-gray-200">
    {
        items.map((item, index) => <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {item.phone}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="p-2 inline-flex text-xl rounded-full bg-blue-100 text-blue-800">
                        {item.result}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.source}</div>
                    <div className="text-sm text-gray-500">{item.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="text-sm text-gray-900">SMS : {item.smsStatus ?? "-"}</div>
                    {
                        !['', '0'].includes(item.notes?.trim()) &&
                        <div className="text-sm text-gray-500" style={{maxWidth: 140}}>{item.notes}</div>
                    }
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end">
                    <a href="#" className="text-gray-600 hover:text-indigo-900">تعديل</a>
                    <HorizontalDivider/>
                    <a href="#" className="text-gray-600 hover:text-red-900">حذف</a>
                </td>
            </tr>
        )
    }
    </tbody>;
}