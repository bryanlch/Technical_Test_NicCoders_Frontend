import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/service';
import { constructorColumnsTable } from '../../utils/columns-table';
import TableComponent from '../../components/table/table-component';

export default function AppPage() {
    const [data, setData] = useState<any[]>([]);
    const [columns, setColumns] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const charactersData = await fetchCharacters();
                setData(charactersData);
                const columnsData = constructorColumnsTable({ info: charactersData?.results });
                setColumns(columnsData);

            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='w-full h-fit flex justify-center items-center my-10'>
                <div className='p-8 shadow-lg border border-slate-50 sm:w-5/6 md:w-4/5 h-2/5 rounded-lg '>
                    <TableComponent
                        columns={columns}
                    />
                </div>
            </div>
        </>
    );
}
