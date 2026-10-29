import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Reactqueryfetechbyclick() {
    const fetchPost = async () => {
        const response = await axios.get(
            'http://localhost:3001/posts'
        );
        return response.data;
    };
    const { data, isLoading, error, isError, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPost(),
        staleTime: 2000,
        enabled: false,
        // refetchInterval : 2000,    

    });

    if (isLoading) {
        return <p>Loading, please wait...</p>;
    }

    if (isError) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className='m-5 flex flex-col gap-5' >
            <h1>React Query Fetch</h1>

            <ul className='border-2 p-2 '>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button className='bg-blue-500 py-1 px-2 rounded-lg text-white font-semibold' onClick={() => refetch()}  >Load Data</button>
        </div>
    )
}

export default Reactqueryfetechbyclick