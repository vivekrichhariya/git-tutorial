const express = require('express')

const app = express()

const port = 5000

app.get('/',(req,res)=>{
	res.send('<h1>Welcome to the landing page...</h1>')

})


app.listen(port,()=>{
	console.log(`test node app running on port ${port}`)
})
