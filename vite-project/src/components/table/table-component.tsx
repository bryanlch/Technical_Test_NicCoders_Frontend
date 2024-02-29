interface TableComponentProps {
    columns: string[];
    data: any[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const TableComponent = ({ columns, data, currentPage, itemsPerPage, totalItems, onNextPage, onPreviousPage }: TableComponentProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="rounded-md bg-slate-100 ">
            <table className="min-w-full divide-y divide-gray-200 rounded-md">
                <thead className="bg-gray-50 rounded-md">
                    <tr className="">
                        {columns && columns?.map((item: string, index: number) => (
                            <th key={"thead" + index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                    {data?.map((obj, index) => (
                        <tr key={"row" + index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            {columns && columns?.map((item: string, i: number) => (
                                <td key={"row-columns" + i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {
                                        item === "image" ? (<img src={obj[item]} className="w-14 h-14 rounded-md" />) : obj[item]
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="p-4 flex justify-between aling-center">
                <div className="grid grid-cols-2 gap-1">
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-l`}
                        onClick={onPreviousPage}
                        disabled={currentPage === 1}
                    >
                        {"<"}
                    </button>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-r`}
                        onClick={onNextPage}
                        disabled={currentPage === totalPages}
                    >
                        {">"}
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        {startIndex} - {endIndex} | total: {totalItems}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;
