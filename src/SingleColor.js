import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`                             //--> this will show you the color which it is in the shades
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)                        //--> after 3 sec it will clear the time out fucntion 
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)              //--> is used to copy the color of from the page by clicking on it 
      }}
    >
      <p className='percent-value'>{weight}%</p>             
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
