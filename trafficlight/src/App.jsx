import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const RenderingUsingIf = () => {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <>
        <h1>Hide</h1>
      </>
    )
  } else {
    return (
      <>
        <h1>Show</h1>
      </>
    )
  }
}

const RenderingUsingAnd = () => {
  const [error, setError] = useState("Esto es un error")

  const style = {
    width: '100%',
    height: '40px',
    backgroundColor: '#ff5544',
    color: 'white'
  }

  return (
    <>
      {
        /* Preguntamos si la variable es distinta de null o undefined */
        !!error && (
          <div className='error' style={style}>
            {error}
          </div>
        )
      }
      <h1>Registro</h1>

    </>
  )

}

const RenderingUsingTernary = () => {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <>
      <h1 className={isOnline ? "online" : "offline"}>
        {
          isOnline ? "online" : "offline"
        }
      </h1>
    </>
  )
}

const UsingOnChangeEvent = () => {

  const [nombre, setNombre] = useState("")

  return (
    <>
      <span>Nombre: {nombre}</span> <br />
      <input type="text" onChange={(e) => setNombre(e.target.value)} /> <br />
    </>
  )
}

const UsingClickEvent = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={() => setShow(show ? false : true )}>{ show ? "hide" : "show"}</button>
    </>
  )
}

const UsingMouseEvent = () => {
  const [className, setClassName] = useState('redBox')

  const changeColor = () => {
    setClassName(className === 'redBox' ? "blueBox" : "redBox");
  }

  return (
    <>
    
    <div className={className} onMouseOver={changeColor} onMouseOut={changeColor}>

    </div>
    
    </>
  )
}


function App() {
  return (
    <>
      <RenderingUsingIf />
      <RenderingUsingAnd />
      <RenderingUsingTernary />
      <UsingOnChangeEvent />
      <UsingClickEvent />
      <UsingMouseEvent />
    </>
  )
}

export default App
