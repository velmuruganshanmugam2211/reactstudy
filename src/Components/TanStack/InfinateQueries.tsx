import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const fetchItems = ({ pageParam }) => {
    return axios.get(`http://localhost:3001/items?_limit=10&_page=${pageParam}`)
}

function InfinateQueries() {
    const { data, isLoading, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["items"],
        queryFn: fetchItems,
        initialPageParam: 1,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < 10) {
                return allPages.length + 1
            } else {
                return undefined;
            }
        }
    });
    if (isLoading) {
        return <p>loading da ...</p>
    }
    if (isError) {
        return <p>error...{error.message}</p>
    }
    console.log(data);

    return (
        <div>
            <div>
                {data?.pages?.map((page) => (
                    page.data.map((item) => { return <div key={item.id} >{item.name}</div> })
                ))}
            </div>
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage} >{hasNextPage ? "Load more" : "No more Data"}</button>
        </div>
    )
}

export default InfinateQueries