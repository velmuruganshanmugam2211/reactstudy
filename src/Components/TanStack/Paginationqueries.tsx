import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const fetechitems = (pagenumber: number) => {
    return axios.get(`http://localhost:3001/items?_limit=10&_page=${pagenumber}`);
}

function Paginationqueries() {
    const [page, setPage] = useState(1)
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["items", page],
        queryFn: () => fetechitems(page),
        placeholderData: keepPreviousData
    })
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }
    return (

        <div className='flex items-center justify-center flex-col'>
            <div>
                <h3 className='text-2xl font-bold text-black'>
                    Pagination Example
                </h3>
                <div>
                    {data?.data.map((item: any) => (
                        <div key={item.id}>
                            {item.id} {item.name}
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
                <button className='bg-green-400' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((pagenumber) => (
                    <button
                        className={`${pagenumber === page
                                ? 'font-bold bg-green-600 text-white'
                                : 'font-light bg-green-400 text-black'
                            } px-4 py-2 rounded`}
                        disabled={page === pagenumber}
                        key={pagenumber}
                        onClick={() => setPage(pagenumber)}
                    >
                        {pagenumber}
                    </button>
                ))}
                <button className='bg-green-400' disabled={page === 10} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Paginationqueries