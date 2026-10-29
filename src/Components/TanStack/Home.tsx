import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash, Pencil } from "lucide-react"
import { useState } from "react";


const API_URL = "http://localhost:3001/posts";


interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

function Home() {

  const [posttitle, setPosttitle] = useState("")
  const [postbody, setPostbody] = useState("")
  const [editpost, seteditpost] = useState<Post | null>(null)

  const queryClient = useQueryClient();

  // fetech All post
  const fetechPost = async () => {
    const { data } = await axios.get(API_URL);
    return data;
  };

  // addpost
  const createpost = async (newPost) => {
    const responce = await axios.post(API_URL, newPost)
    return responce.data;
  }
  // Deletepost
  const deletepost = async (id) => {
    const responce = await axios.delete(`${API_URL}/${id}`);
    return responce.data;
  }
  // Updatepost
  const updatepost = async (updatepostdata) => {
    const { data } = await axios.put(`${API_URL}/${updatepostdata.id}`, updatepostdata);
    return data;
  }

  // create post mutation
  const createPostMutation = useMutation({
    mutationFn: createpost,
    onSuccess: (newData) => {
      console.log("new post created::", newData);
      queryClient.invalidateQueries({ 
        queryKey: ["post"] });
        setPosttitle("");
        setPostbody("");
    },

  });
  const deletePostMutation = useMutation({
    mutationFn: deletepost,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["post"] });
    },
  });
  const UpdatePostMutation = useMutation({
    mutationFn: updatepost,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["post"] });
      seteditpost(null);
    },
  });

  const handleCreate = () => {
    createPostMutation.mutate({
      title: posttitle,
      body: postbody,
      userId: 3,
    });
  };

  // const HandileDelete = (id)=>{
  //   if(confirm("Are you sure you want to delete the post ?")){
  //     deletePostMutation.mutate(id);
  //   }
  // };

  const HandileDelete = (id) => {
    if (!id) {
      console.error("Post ID is missing!");
      return;
    }

    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostMutation.mutate(id);
    }
  };

  const Handleupdate = () => {
    if (!editpost) return;
    UpdatePostMutation.mutate(editpost);
  };

  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: fetechPost,
  })

  if (isLoading) {
    return <div>loading...</div>
  }
  if (isError) {
    return <div>error...{error.message}</div>
  }

  return (
    <div className='flex items-center justify-center flex-col m-10'>
      <h1 className='text-black font-bold text-2xl mb-5'>Create Read Update Delete</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}>
        <input type="text" value={posttitle} onChange={(e) => setPosttitle(e.target.value)} placeholder="Post Title" />
        <input type="text" value={postbody} onChange={(e) => setPostbody(e.target.value)} placeholder="Post Body" />
        <button type="submit">Add Post</button>
      </form>
      <div className="grid grid-cols-2 gap-4">
        {post?.map((post: Post) => (
          <div key={post.id} className="border-2 p-4 bg-green-100 hover:bg-green-300 hover:border hover:border-black rounded-lg shadow-md border-black">
            {editpost?.id === post.id ? (
              <div className="flex flex-col gap-2 mb-2">
                <input
                  type="text"
                  className="border border-gray-400 p-1 rounded bg-white text-black"
                  value={editpost.title}
                  onChange={(e) => seteditpost({ ...editpost, title: e.target.value })}
                  placeholder="Post Title"
                />
                <input
                  type="text"
                  className="border border-gray-400 p-1 rounded bg-white text-black"
                  value={editpost.body}
                  onChange={(e) => seteditpost({ ...editpost, body: e.target.value })}
                  placeholder="Post Body"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="bg-green-600 hover:bg-green-700 py-1 px-3 rounded text-white font-semibold"
                    onClick={() => Handleupdate()}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 py-1 px-3 rounded text-white font-semibold"
                    onClick={() => seteditpost(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="font-bold text-lg mb-2"> {post.id}. {post.title}</div>
                <div>{post.body}</div>
                <div className="p-2 flex gap-2 items-center">
                  <button
                    type="button"
                    className="flex gap-2 items-center bg-red-500 hover:bg-red-600 py-2 px-2 rounded-lg text-white font-semibold"
                    onClick={() => { HandileDelete(post.id) }}
                  >
                    <Trash size={18} color="white" />Delete
                  </button>
                  <button
                    type="button"
                    className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 py-2 px-2 rounded-lg text-white font-semibold"
                    onClick={() => { seteditpost(post) }}
                  >
                    <Pencil size={18} color="white" />Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home