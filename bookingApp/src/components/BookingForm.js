    import React,{useRef, useState,useContext} from 'react'
    import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import { FileDrop } from 'react-file-drop'
    import {GlobalContext} from '../context/store'  

    const BookingForm = () => {
    const {addBookingData}=useContext(GlobalContext)
    const [netAmount,setNetAmount]=useState(0)
 
    const fileInputRef = useRef(null);
    const applicantName = useRef(null);
    const phNo = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const unitNoRef = useRef(null);
    const blockRef = useRef(null);
    const remarksRef = useRef(null);
    const grossAmountRef = useRef(null);
    const discountRef = useRef(null);
    const netAmountRef = useRef(null);
    const bookingDateRef = useRef(null);
    const cnicRef = useRef(null);
        const onClickHandler=(e)=>{
            e.preventDefault();
           const bookingData= {
                id:Math.random(),
                applicant_name:applicantName.current.value,
                phone_no:phNo.current.value,
                email:emailRef.current.value,
                cnic:cnicRef.current.value,
                address:addressRef.current.value,
                unit_no:unitNoRef.current.value,
                block:blockRef.current.value,
                gross_amount:grossAmountRef.current.value,
                discount:discountRef.current.value,
                net_amount:netAmountRef.current.value,
                booking_date:bookingDateRef.current.value,
                image:fileInputRef.current.value
            }
            addBookingData(bookingData)
          
        }
      const  formatInput = (e) => {
            const nameCleaned = e.replace(/\s/g, '')
            applicantName.current.value=nameCleaned.toUpperCase();
          }
        return (
        
                <div className="w-100 d-flex justify-content-center">
                    <div className="from-inner w-75 shadow rounded p-2">
                    <h1 class="booking-heading text-center">Booking Form</h1>
                    <form class=" g-3 needs-validation" onSubmit={onClickHandler}>
                <div class="row">
                    <div class="form-floating mb-3 col-md-4">
                        <input onChange={(e)=>{formatInput(e.target.value)}} ref={applicantName} type="text" class="form-control" id="floatingPhoneNumber" placeholder="name@example.com" required/>
                        <label class="px-4" for="floatingInput">Applicant Name</label>
                    </div>
                    <div class="form-floating col-md-4">
                    <input ref={phNo} type="number" class="form-control p-2" id="floatingPassword" placeholder="Phone Number" required/>
                    <label class="px-4" for="floatingPhoneNumber">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3 col-md-4">
                        <input ref={emailRef} type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
                        <label class="px-4" for="floatingEmail">Email</label>
                    </div>
                </div>
                <div class="row">
                   
                    <div class="form-floating col-md-6">
                    <input ref={addressRef} type="text" class="form-control p-2" id="floatingAdderss" placeholder="Address" required/>
                    <label class="px-4" for="floatingAddress">Address</label>
                    </div>
                    <div class="form-floating mb-3 col-md-3">
                        <input ref={unitNoRef} type="number" class="form-control" id="floatingUnit" placeholder="Unit No" required/>
                        <label class="px-4" for="floatingUnit">Unit No</label>
                    </div>
                    <div class="form-floating col-md-3">
                    <input ref={blockRef} type="number" class="form-control p-2" id="floatingBlock" placeholder="Block" required/>
                    <label class="px-4" for="floatingBlock">Block</label>
                    </div>
                </div>
                <div class="row">
                </div>
                
                <div class="row">
                    <div class="form-floating mb-3 col-md-3">
                        <input  type="number" ref={cnicRef} class="form-control" id="floatingRemarks" placeholder="CNIC" required/>
                        <label class="px-4" for="floatingRemarks">CNIC</label>
                    </div>
                    <div class="form-floating mb-3 col-md-3">
                        <input ref={bookingDateRef} type="date" class="form-control" id="floatingRemarks" placeholder="Booking Date" required/>
                        <label class="px-4" for="floatingDate">Booking Date</label>
                    </div>
                    <div class="form-floating mb-3 col-md-6">
                        <textarea  ref={remarksRef} class="form-control" id="floatingRemarks" placeholder="Remarks" required></textarea>
                        <label class="px-4" for="floatingRemarks">Remarks</label>
                    </div>
                   
                </div>
                <hr/>
                <h4 className="text-dark">Payment Section</h4>
                <div class="row">
                    <div class="form-floating mb-3 col-md-4">
                        <input type="number" ref={grossAmountRef} class="form-control" id="floatingGrossAmount" placeholder="Gross Amount" required/>
                        <label class="px-4" for="floatingGrossAmount">Gross Amount</label>
                    </div>
                    <div class="form-floating col-md-4">
                    <input type="number" ref={discountRef} onChange={(e)=>{setNetAmount(grossAmountRef.current.value-e.target.value)}} class="form-control p-2" id="floatingDiscount" placeholder="Discount" required/>
                    <label class="px-4" for="floatingDiscount">Discount</label>
                    </div>
                    <div class="form-floating col-md-4">
                    <input type="number" ref={netAmountRef} class="form-control p-2" id="floatingNetAmount" placeholder="Amount" value={netAmount} readonly required/>
                    <label class="px-4" for="floatingNetAmount">Net Amount</label>
                    </div>


                </div>

                <div className="row">
                    <div className="col-md-12">   
                    <input
                
                    ref={fileInputRef}
                    type="file"
                    className="hidden form-control"
/>
                    </div>
                </div>
                        <input type="submit" value="Book Now" className="mt-2 btn btn-primary shadow px-3 pt-2 pb-2"/>
                    </form>
                    </div>
                    </div>
        )
    }

    export default BookingForm
