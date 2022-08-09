import React, { Children } from 'react'

function Greetings(props) {

  let idioma = "";
  switch (props.lang) {
    case 'de':
      idioma ='Hallo';
    case 'es':
      idioma = 'Hola';
    case 'fr':
      idioma = 'Bonjour';
    case 'en':
      idioma = 'Hello';
    default:
      idioma =  'Hello';
  }

  return (
    <div className='cuerpo'> 
      <p>{`${idioma} ${props.children}`}</p>
    </div>
  )

}

export default Greetings
