import React from 'react'
import {useState} from "react";

export default  function Todo() {
    const [Todos,setTodos] = useState([])
    const [Todo,setTodo]  = useState([])
    const [edit,setEdit]  = useState(true)
    const [temp,setTemp]  = useState(null)

    const addtodo=()=>{
      if(!Todo){
        alert('Plz input todo');
      }
      else if(Todo && !edit){
          setTodos(Todos.map((item)=>{
              if(item.id ===temp){
                  return{...Todos,Todo:Todo}
              }
              return item;
          })
        )
            setEdit(true)
            setTodo('')
            setTemp(null)
    }
      else{
        const item={id:Math.random(),Todo}
        setTodos([...Todos,item])
        setTodo("")
    }}
    const deletetodo =(id)=>{
        const trash= Todos.filter((item)=>(item.id!==id)
        )
        setTodos(trash)
    }
      const edittodo=(id)=>{
        let edited = Todos.find((item)=>{
          return item.id === id
        })
        console.log(edited);
        setEdit(false);
        setTodo(edited.Todo);
        setTemp(id)
        // console.log(edited)
        // setTodo(edited[0].Todo)
      //   }
      // const updateTodo=(id)=>{
      //   var temp_U=Todos
      //   temp_U.map(x => (x.id === temp?.id ? { ...x, Todo: temp?.Todo } : x));
      //   // for(let i in temp_U){
      //   //     if(temp_U[i].id===temp?.id){
      //   //         console.log(typeof(temp_U[i].id),typeof(temp?.id))
      //   //         temp_U[i].Todo=temp?.Todo
      //   //     }
      //   //     console.log("sds",temp_U[i].id," -- ",temp)
      //   // }
      //   console.log("e",temp_U)
      //   setTodos(temp_U)
      //   setTodo('')
    }

    return (
        <>
        <div>
          <input type="text" value={Todo} onChange={(e)=>setTodo(e.target.value)}/>
          {
              edit?<button onClick={addtodo}>Add Todo</button> :
              <button onClick={addtodo} >Update</button>  

          }
          </div>
          <div>
              <ul>
                  {Todos.map((item) =>
                  <li key={item.id}>{item.Todo}
                  <button id={item.id} onClick={()=>deletetodo(item.id)}>Delete</button>
                  <button id={item.id} onClick={()=>edittodo(item.id)}>Edit</button>
                  </li>
                    )}
              </ul>
          </div>
        </>
    )
}

