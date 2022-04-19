// initialize the express application 
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

// the forwards ...
app.get('/', (req, res) => {
  res.send('Hello 🍪!')
})

app.get('/set-cookie', (req, res) => {
  //res.setHeader('set-cookie', 'foo=bar');
  res.cookie('foo', 'bar', {
    //maxAge:5000, 
    //expires: new Date('19 April 2022')
    //httpOnly: true,
    //domain: 'localhost',

  })
  //res.cookie('fizz', 'buzz')
  res.send('Cookie are set');
}) 

app.get('/get-cookie', (req, res) => {
 
  console.log(req.cookies)
  res.send(req.cookies)

}) 

app.get('/del-cookie', (req, res) => {
  //console.log(req.cookies)
  res.clearCookie('fizz')
  //res.send(req.cookies)
  res.send("Cookie has been deleted!")
}) 

// waiting the server on port 3000 
app.listen(3000, () => console.log(' server on port 3000')) 
