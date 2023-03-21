import React, { useContext } from 'react'
import {GlobalContext} from '../context/store'

const BookinngHistory = () => {

const {data}=useContext(GlobalContext);
const {deleteBookingData}=useContext(GlobalContext);

const deleteHistory=(id)=>{
    deleteBookingData(id)
}
    return (
        <div className="shadow d-flex justify-content-center align-items-center mt-3">

     
        <div style={{overflow:"scroll"}}>
            <table className="table bordered">
                <thead>
                <tr>
                    <th>Booking Date</th>
                    <th>Applicant Name</th>
                    <th>Ph No.</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>CNIC</th>
                    <th>Unit No</th>
                    <th>Block</th>
                    <th>Remarks</th>
                    <th>Gross Amount</th>
                    <th>Discount</th>
                    <th>Net Amount</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {
                    data?

                    <tbody>
                   { data.map(item=>(
                       <tr>
                    <td>{item.booking_date}</td>
                    <td>{item.applicant_name}</td>
                    <td>{item.phone_no}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.cnic}</td>
                    <td>{item.unit_no}</td>
                    <td>{item.block}</td>
                    <td>{item.remarks}</td>
                    <td>{item.gross_amount}</td>
                    <td>{item.discount}</td>
                    <td>{item.net_amount}</td>
                    <td>{item.image}</td>
                    <td><button class="btn btn-danger" onClick={()=>deleteHistory(item.id)}>Delete</button></td>
                   
                    </tr>))}
                </tbody>
                :null
        }
            </table>
        </div>   </div>
    )
}

export default BookinngHistory
