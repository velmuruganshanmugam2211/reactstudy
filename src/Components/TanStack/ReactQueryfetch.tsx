import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReactQueryfetch() {
    const fetchPost = async () => {
        const response = await axios.get(
            'http://localhost:3001/posts'
        );
        return response.data;
    };

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPost,
        staleTime: 2000,
        // refetchInterval : 2000,    

    });

    if (isLoading) {
        return <p>Loading, please wait...</p>;
    }

    if (isError) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div>
            <h1>React Query Fetch</h1>

            <ul>
                {data?.map((post) => (
                    <Link
                        key={post.id}
                        to={`/reactqueryfetch/${post.id}`}
                        className='flex flex-col gap-2 m-5 hover:bg-gray-200 p-2'
                    >
                        {post.title} 
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ReactQueryfetch;
