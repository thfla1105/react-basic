import { useContext } from 'react'
import { ColorContext } from '../App'
import { IsActiveContext } from './B2'

export default function A2() {
  const color = useContext(ColorContext)
  console.log(IsActiveContext)
  // const [isActive] = useContext(IsActiveContext)!
  return (
    <>
      <h2>A2: {color}</h2>
    </>
  )
}
