import { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  const double = useMemo(() => {
    return count * 2
  }, [count])

  useEffect(() => {
    console.log(`Double is ${double}`)
  }, [double])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>Count : {double}</h1>
    </>
  )
}
