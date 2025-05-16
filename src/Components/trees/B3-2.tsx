import { useContext } from 'react'
import { IsActiveContext } from './B2'

export default function Comp() {
  const [isActive, setIsActive] = useContext(IsActiveContext)!
  return (
    <h2
      onClick={() => {
        setIsActive(!isActive)
      }}>
      B3-2: {JSON.stringify(isActive)}
    </h2>
  )
}
