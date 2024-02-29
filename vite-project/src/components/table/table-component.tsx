import React from 'react';

interface TableComponentProps {
    columns: string[];
    data: any[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const TableComponent = ({ columns, data, currentPage, itemsPerPage, totalItems, onNextPage, onPreviousPage }) => {
    console.log(columns);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {columns?.map((item: string, index: number) => (
                        <tr key={"thead" + index}>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {item}
                            </th>
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data?.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{startIndex + index}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l`}
                        onClick={onPreviousPage}
                        disabled={currentPage === 1}
                    >
                        {"<"}
                    </button>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r`}
                        onClick={onNextPage}
                        disabled={currentPage === totalPages}
                    >
                        {">"}
                    </button>
                </div>
                <p className="text-gray-600">
                    {startIndex} - {endIndex} | {totalItems}
                </p>
            </div>
        </div>
    );
};

export default TableComponent;
