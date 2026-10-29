import { useState } from 'react'
// import CustomerView from './customerView';
import {addCustomer as addCustomerAction} from '../../Slices/customerSlices'
import { useDispatch } from 'react-redux';



function CustomerAdd() {

  const [input, setInput] = useState("");
  // const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();

  const addCustomer = () => {
    if (input) {
      // setCustomers((prevcustomer) => [...prevcustomer, input]);
      // console.log(customers);
      dispatch(addCustomerAction(input))
      setInput("");
      
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-5 m-15 '>
        <h3 className='text-red-500 font-bold text-2xl'>Add New Customer</h3>
        <input className='border rounded-md p-2 m-2' value={input} type="text" onChange={(e) => setInput(e.target.value)} />
        <button className='border rounded-md px-8 py-2 bg-green-500 text-white font-bold hover:bg-green-900 hover:text-white hover:font-bold hover:cursor-pointer' onClick={addCustomer}>Add</button>
      </div>
      {/* <CustomerView customers={customers} /> */}
    </div>
      )
      

}

export default CustomerAdd