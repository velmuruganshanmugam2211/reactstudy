import { useQueries } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId?: number;
}

interface Item {
    id: number;
    name: string;
    category?: string;
    price: number;
    description?: string;
    inStock?: boolean;
}

const fetechPostId = async (postId: number): Promise<Post> => {
    const responce = await axios.get<Post>(`http://localhost:3001/posts/${postId}`)
    return responce.data;
};
const fetechitemId = async (itemId: number): Promise<Item> => {
    const responce = await axios.get<Item>(`http://localhost:3001/items/${itemId}`)
    return responce.data;
};

const MultiplePosts = ({ postIds }: { postIds: number[] }) => {
    const postQueries = useQueries({
        queries: postIds.map((id) => ({
            queryKey: ['post', id],
            queryFn: () => (fetechPostId(id)),
            staleTime: 25000,
        })),
    });
    console.log(postQueries)
//     postQueries.forEach((query, index) => {
//     console.log("Query:", index);
//     console.log("Data:", query.data);
//     console.log("Error:", query.error);
//     console.log("Status:", query.status);
// });

    const isLoading = postQueries.some((query) => query.isLoading);

    if (isLoading) {
        return <div>Is Loading ..... </div>
    }

    return (<div>
            
        <h4>
            Fetched Posts
        </h4>
        {postQueries.map((query, index) => (
            <div key={index} >
                <h4>{query.data?.id}.{query.data?.title}</h4>
                <h4>{query.data?.body}</h4>
            </div>
        ))}

    </div>)
};
const MultipleItems = ({ itemIds }: { itemIds: number[] }) => {
    const itemQueries = useQueries({
        queries: itemIds.map((id) => ({
            queryKey: ['item', id],
            queryFn: () => (fetechitemId(id)),
            staleTime: 25000,
        })),
    });
    console.log(itemQueries)

    const isLoading = itemQueries.some((query) => query.isLoading);

    if (isLoading) {
        return <div>Is Loading ..... </div>
    }

    return (<div>

        <h4>
            Fetched Data
        </h4>
        {itemQueries.map((query, index) => (
            <div key={index} >
                <h4>{query.data?.id}.{query.data?.name}</h4>
                <h4>{query.data?.price}</h4>
            </div>
        ))}

    </div>)
};
function UseQueriesDemo() {
    const postIds = [1, 5, 3, 5, 9];
    const itemIds = [1, 5, 3, 5, 9];
    return (
        <div>
            <div>UseQueriesDemo</div>
            <MultiplePosts postIds={postIds} />
            <MultipleItems itemIds={itemIds} />
        </div>
    );
};

export default UseQueriesDemo