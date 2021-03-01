const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

// app.get("/about", (req, res) => {
//     res.send('The about page')
// })

// app.get("/contact", (req, res) => {
//     res.send('The contact page')
// })

app.get("/", (req, res) => {
    res.send('The home page')
})

// called when request to /about comes in
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

//called when request to /contact comes
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('*', function (req, res) {
    res.header(404)
    res.send('page not found')
})