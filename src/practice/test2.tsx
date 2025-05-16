import { useState } from 'react'
import './App.css'

export default function Apps() {
  const [text, setText] = useState('Hello world!')
  const [width, setWidth] = useState(16)

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      console.log(event.currentTarget.value)
    }
  }

  function handleClick() {
    setWidth(width + 16)
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      />
      <h1 className={text.length > 12 ? 'active' : ''}>{text}</h1>
      <div className="box"></div>
      <div
        style={{
          width: `${width}px`
        }}
        className="box"></div>
      {/*Emmet 문법*/}
      {/*.container>.inner>ul>li{$$}*100*/}
    </>
  )
}
