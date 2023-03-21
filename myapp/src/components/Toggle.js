import {useState} from 'react'

const Toggle=()=> {
    const[Count,setCount]=useState(false)
    return (
        <div className={Count?"day":"night"}>
            <button onClick={()=>setCount(!Count)}>{Count?"Night":"Day"}</button>
            <h1 className={Count?"day-text":"night-text"}>{Count?"Day Mode":"Night Mode"}</h1>
        </div>
    )
}
export default Toggle;