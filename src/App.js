import React, { useEffect, useState } from "react"
import "./App.css"
import { Form } from "./components/form/form"
import { Image } from "./components/image/image"

const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const startTime = performance.now() // start timer
      try {
        const response = await fetch("images?limit=10")
        console.log(response)
        const endTime = performance.now() // stop timer
        console.log("Time taken:", endTime - startTime, "ms") // log time taken
        const data = await response.json()
        console.log("Success:", data)
        setImages(data)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchImages()
  }, [])

  return (
    <div className='app'>
      {images.map((img) => (
        <Image image={img} />
      ))}
      <Form />
    </div>
  )
}

export default App
