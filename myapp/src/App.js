
import './App.css'
import { useState,useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const [desc, setdesc] = useState("")
  const [mode, setmode] = useState("")
  const [amount, setamount] = useState(0)
  const [transactions, settransactions] = useState([])

  const [suminc, setsuminc]=useState(0)
  const [sumexp, setsumexp]=useState(0)

  useEffect(() => {
   
    const income = transactions
    .filter((item,ind)=>(item.mode!="Expense"))
    .map((num,ind)=>(num.amount))
    .reduce((acc,num)=>(acc+(parseInt(num))),0);

    const expense = transactions
    .filter((item,ind)=>(item.mode!="Income"))
    .map((num,ind)=>(num.amount))
    .reduce((acc,num)=>(acc+(parseInt(num))),0);

  setsuminc(income)
  setsumexp(expense)
  }
, [transactions])


  const addTransaction = () => {
    const transaction = {
      description: desc,
      mode,
      amount
    }
    settransactions([...transactions, transaction])
  }
    
    

  const deletetransaction = (id) => {
    const trash = transactions.filter((_, ind) => (ind != id))
    settransactions(trash)
  }

  return (
    <>
      <div className="main-accounts">
        <div className="top-div">
          <div className="addTransactions">
            <h1>Add New Transactions</h1>
            <label>Description</label><input type="text" onChange={(e) => setdesc(e.target.value)} />
          
            <fieldset>
              <legend>Transaction Mode</legend>
                <label>Income </label> <input value="Income" onChange={(e) => setmode(e.target.value)} type="radio" name="mode" />
                <label>Expense</label><input value="Expense" onChange={(e) => setmode(e.target.value)} type="radio" name="mode" />
                </fieldset>
            <label>Amount</label><input onChange={(e) => setamount(e.target.value)} type="number" />
            <button onClick={addTransaction}>Add</button>
          </div>
          <div className="dashBoard">
            <div><h3>Income</h3><h4>{suminc}</h4></div>
          <div><h3>Expense</h3><h4>{sumexp}</h4></div>
            <div><h3>Balance</h3><h4>{suminc - sumexp}</h4></div>
          </div>
        </div>
        <div className="bottom-div d-flex">
          <div className="history d-flex flex-wrap">
            <table>
              <tr>
                <th >SN</th>
                <th >Desctiption</th>
                <th >Mode</th>
                <th >Amount</th>
                <th colSpan="2">Activity</th>
              </tr>
              {
                transactions.map((transaction, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.mode}</td>
                    <td>{transaction.amount}</td>
                    <td><button className="btn-primary" id={ind} onClick={(e) => deletetransaction(e.target.id)}>Delete</button></td>
                    <td><button className="btn-danger">Edit</button></td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;

