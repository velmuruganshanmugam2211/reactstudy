import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const fetchItems = ({ pageParam }) => {
    return axios.get(`http://localhost:3001/items?_limit=20&_page=${pageParam}`)
}

function infinateQueryScroll() {
    const { data,fetchNextPage, isLoading, isError, error ,isFetching } = useInfiniteQuery({
        queryKey: ["items"],
        queryFn:fetchItems  ,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < 10) {
                return allPages.length + 1
            } else {
                return undefined;
            }
        }
    })

    const { ref, inView } = useInView({
    })

useEffect(() => {
    if (inView) {
        fetchNextPage()
    }
}, [fetchNextPage, inView])

    if (isLoading) {
        return <p>loading da ...</p>
    }
    if (isError) {
        return <p>error...{error.message}</p>
    }
    console.log(data);

    return (
        <div>
            <div className='text-center font-bold text-xl'>Infinate Scroll</div>
            {data?.pages?.map((page) => {
                return (
                    page?.data?.map((item: any) => {
                        return (
                            <div key={item.id}>
                              {item.id}  {item.name}
                            </div>
                        )
                    })
                )
            })}
            <div ref={ref}>{isFetching?'Loading more...':"No more data"}</div>
            {/* <button onClick={() => fetchNextPage()} disabled={!hasNextPage} >Load more</button> */}
        </div>
    )
}

export default infinateQueryScroll