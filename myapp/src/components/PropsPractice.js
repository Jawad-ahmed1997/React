import React from 'react'

 function PropsPractice(props){
     const{Name,father}=props;
    return (
        <>
            <h1>My Name is {Name}</h1>
            <h1>My Father Name is {father}</h1>
        </>
    )
}
export default PropsPractice;