const app = require("express")()
const images = require("./src/images.json")

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// randomInterval(500,1500)`
// Math.floor(Math.random() * (1500 - 500 + 1) + 500)
// Math.floor(Math.random() * (1001) + 500)
// Math.floor(Math.random() * 1501)
// Math.floor(0.01 * 1501)
// Math.floor(0.99 * 1501)

app.get("/images", ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images

  // setTimeout(() => {
  return res.status(200).json(i)
  // }, randomInterval(500, 1500))
})

//there is  setTimeout delays the response by a random time between a 500 and 1500.

app.listen(5000, () => {
  process.stdout.write("Server is available on http://localhost:5000/\n")
})
