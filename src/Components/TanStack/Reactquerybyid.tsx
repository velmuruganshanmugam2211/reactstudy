import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetechPostById = (postId)=>{
    return axios.get(`http://localhost:3001/posts/${postId}`)
}
function Reactquerybyid() {
    const { postid } = useParams();
    const {data , isLoading,error,isError}=useQuery({
        queryKey:['posts',postid],
        queryFn : ()=>(fetechPostById(postid)),
    });
    if(isLoading){
        return <div>loading...</div>
    };
    if(isError){
        return <div>error...{error.message}</div>
    };
    const {title,body,userId}=data?.data||{};
    return (

        <div>
            <div className="p-2 text-xl font-semibold">Title:{title}</div>
            <div className="p-2 text-xl font-semibold">Body:{body}</div>
            <div className="p-2 text-xl font-semibold">userId:{userId}</div>
        </div>
    )
}

export default Reactquerybyid