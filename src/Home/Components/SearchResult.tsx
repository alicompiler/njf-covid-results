import {Component} from "react";
import {Patient} from "../Data/Patient";
import {HorizontalDivider} from "../../Shared/HorizontalDivider";


interface Props {
    items: Patient[];
}

export class SearchResult extends Component<Props> {
    render() {
        return <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Patient
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Result
                                </th>

                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Source / Status
                                </th>

                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Date
                                </th>

                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Note/SMS Status
                                </th>

                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                            {
                                this.props.items.map((item, index) => <tr key={index}>
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
                                            <span
                                                className="p-2 inline-flex text-xl rounded-full bg-blue-100 text-blue-800">
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
                                            <div className="text-sm text-gray-900">SMS : {item.smsStatus}</div>
                                            {
                                                !['', '0'].includes(item.notes?.trim()) &&
                                                <div className="text-sm text-gray-500" style={{maxWidth: 140}}>{item.notes}</div>
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            <HorizontalDivider/>
                                            <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>;
    }
}