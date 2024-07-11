"use client";

import addTransaction from "../actions/AddTransaction";
import {toast} from 'react-toastify';
import { useRef } from "react";

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) =>{
        const result = await addTransaction(formData);

        if(result.error){
            toast.error(result.error);
        }else{
            toast.success("Transaction Added")
            formRef.current?.reset();
        }
    }

    return ( <>
    <h3>Add Transaction</h3>
    <form ref={formRef} action={clientAction}>

        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input id="text" type="text" name="text" placeholder="Enter text..."/>
        </div>

        <div className="form-control">
            <label htmlFor="amount">Amount <br />(negitive - expense, positive - income )</label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount.." step='0.01' />
        </div>

        <button className="btn">Add Transaction</button>
    </form>
    </> );
}
 
export default AddTransaction;