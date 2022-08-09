import React from 'react'

function IdCard(props) {

  
  return (
    <div className='card cuerpo'>
        <div >
            <img src={props.picture} alt="" />
        </div>
        <div >  
           <p>First Name: {props.firstName} </p> 
           <p>Last Name: {props.lastName}</p>
           <p>Gender: {props.gender}</p>
           <p>Height: {props.height}m</p>
           <p>Birth:{ props.birth.toDateString()}</p>
        </div>
    </div>

  )
}

export default IdCard