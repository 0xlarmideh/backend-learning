const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.listen(3000);

app.use((req, res, next) => {
  console.log('host', req.hostname)
  next();
})

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
})

app.get("/about-us", (req, res) => {
  res.redirect('/about')
});

app.use((_, res) => {
  res.status(404).sendFile('./404.html', {root: __dirname});
})