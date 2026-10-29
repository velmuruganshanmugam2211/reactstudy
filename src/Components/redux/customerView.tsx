// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../../Slices/store'
import { deleteCustomer } from '../../Slices/customerSlices'

// function customerView({customers}) {
//   return (
//     <div>
//         <h3>View Customers</h3>

//         <ul>{customers.map((customer)=><li>{customer}</li>
//         )}

//         </ul>
//     </div>
//   )
// }

function customerView() {

    const customers = useSelector((state: any) => state.customers);
    const dispatch = useDispatch();
    const handleDelete = (index) => {
        dispatch(deleteCustomer(index))
    };
    return (
        <div>
            <h3>View Customers</h3>

            <ul>{customers.map((customer, index) => (<div key={index} > <li>{customer} <button onClick={() => handleDelete(index)} className='border border-white rounded-lg bg-red-500 text-white font-bold hover:bg-green-500 hover:text-white hover:font-bold hover:cursor-pointer'>Delete it Now</button> </li>
            </div>)
            )}

            </ul>
        </div>
    )
}

export default customerView

