let data = require("./data")
const express = require('express')
var cors = require('cors');
const app = express()
const PORT = process.env.PORT || 2001;
app.use(cors());
app.get('/', function (req, res) {
  res.send('type /data to view players info , then type a player of your own to view his info')
})

app.get('/data', function (req, res) {

  //  status(200) : incase no error occored ,successfuly get response 
  res.status(200).json(data)
})

app.get(`/data/:name`, (req, res) => {
  const pName = req.params.name
  // const player = data.find((card)=>{return card.PlayerName===pName})
  const players = data.filter((card) => { return card.PlayerName.toLowerCase().includes(pName.toLowerCase()) })
  if (players.length === 0) {
    return res.status(200).send('!!!Player Not Found!!!')
  }
  res.status(200).json(players)
})

// app.get(`/data/:nation`, (req, res)=>{
//   const nation = req.params.nation
//   const country = data.find((element)=>{return element.Nation===nation})
//   res.status(200).json(country)
// })

app.listen(PORT)