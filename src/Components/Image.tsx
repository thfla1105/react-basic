import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Image({
  src,
  alt,
  width,
  height
}: {
  src: string
  alt?: string
  width?: number
  height?: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    init()
  }, [])

  async function init() {
    try {
      await loadImage()
      setIsLoading(false)
    } catch (error) {
      setMessage('Image not found')
      setIsLoading(false)
    }
  }

  function loadImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img') //memory 상에서만 사용
      img.src = src
      img.addEventListener('load', () => resolve(img)) //이행
      img.addEventListener('error', () => reject(new Error('Image not found'))) //거부
    })
  }

  return (
    <div
      style={{ width, height }}
      className="relative bg-gray-100">
      {isLoading ? (
        <Loader />
      ) : message ? (
        <p>{message}</p>
      ) : (
        <img
          src={src}
          alt={alt}
        />
      )}
    </div>
  )
}
