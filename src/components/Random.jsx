import React from 'react'

function Random(props) {

    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return (
    <div className='cuerpo'>
        {`Random value between ${props.min} and ${props.max} => ${randomNum}`}
    </div>
  )
}

export default Random