import {useSelector, useDispatch} from "react-redux";
import { increment , decrement , reset } from "../../Slices/counterSlice";

function counteradd() {
    const counter = useSelector((state:any)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  )
}

export default counteradd