import { useState, useEffect } from "react";
import ButtonIcon from "../buttons/button-icon";
interface TableComponentProps {
    columns: string[];
    data: any[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
}

const TableComponent = ({
    columns,
    data,
    currentPage,
    itemsPerPage,
    totalItems,
    onNextPage,
    onPreviousPage,
    addFavorite,
    removeFavorite
}: TableComponentProps) => {
    const [columnsState, setColumnsState] = useState(columns);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    useEffect(() => {
        if (!columns.length) return;
        const handleResize = () => {
            let numberArr = 0;
            const width = window.innerWidth;

            if (width < 640) {
                numberArr = 3;
            } else if (width >= 640 && width < 1024) {
                numberArr = 2;
            }

            const newColumns = numberArr ? columns.slice(0, -numberArr) : columns;
            setColumnsState(newColumns);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [columns]);

    return (
        <div className="rounded-md bg-slate-100 p-1">
            <table className="min-w-full table-auto  rounded-md">
                <thead className="bg-slate-100 rounded-md">
                    <tr className="border-b ">
                        {columns && columnsState?.map((item: string, index: number) => (
                            <th key={"thead" + index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="w-full ">
                    {data?.map((obj, index) => (
                        <tr key={"row" + index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-white'}>
                            {columns && columnsState?.map((item: string, i: number) => (
                                <td key={"row-columns" + i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {
                                        item === "image" ? (<img src={obj[item]} className="w-14 h-14 rounded-md" />) : obj[item]
                                    }
                                </td>
                            ))}
                            <td>
                                <div className="grid grid-cols-2 w-full">
                                    <ButtonIcon icon={"❤"} onClick={() => addFavorite(obj?.id)} disabled={false} />
                                    <ButtonIcon icon={"-"} onClick={() => removeFavorite(obj?.id)} disabled={false} />

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="p-4 flex justify-between aling-center">
                <div className="grid grid-cols-2 gap-1">
                    <ButtonIcon icon={"<"} onClick={onPreviousPage} disabled={currentPage === 1} />
                    <ButtonIcon icon={">"} onClick={onNextPage} disabled={currentPage === totalPages} />
                </div>
                <div className="bg-slate-200 px-3 py-2 grid grid-cols-2 md:grid-cols-3 items-center rounded-md ">
                    <div className="md:col-span-2 ">
                        {startIndex} - {endIndex}
                    </div>
                    <div className="">
                        <p className="text-gray-600">
                            total: {totalItems}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;
