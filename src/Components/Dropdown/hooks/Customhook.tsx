import useTodos from '../../../Utilities/useTodos'


function Customhook() {
    const { todos, loading } = useTodos();
    if (loading){
        return <div>loading...</div>
    }
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
        {todos.map((todo) => (
            <div key={todo.id}>
                <h1>{todo.id}  :  {todo.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Customhook