import { useEffect, useState, memo } from 'react';
import { fetchCharacters } from '../../services/service';
import { constructorColumnsTable } from '../../utils/columns-table';
import TableComponent from '../../components/table/table-component';

const TableComponentMemo = memo(TableComponent);

export default function AppPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [columns, setColumns] = useState<any>({});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(20);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const charactersData: any = await fetchCharacters(currentPage, itemsPerPage);
            setTotalItems(charactersData.info.count);
            setData(charactersData.results);
            const columnsData = constructorColumnsTable({ info: charactersData.results });
            setColumns(columnsData);
            setItemsPerPage(itemsPerPage);
            setLoading(true);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching characters:', error);
        }
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className='w-full h-fit flex justify-center items-center my-10'>
                <div className='p-8 shadow-lg border border-slate-50 sm:w-5/6 md:w-4/5 h-2/5 rounded-lg '>
                    {loading && (
                        <TableComponentMemo
                            columns={columns}
                            data={data}
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={totalItems}
                            onNextPage={goToNextPage}
                            onPreviousPage={goToPreviousPage} />
                    )}
                </div>
            </div>
        </>
    );
}
