//setup
const express = require("express")
var cors = require("cors")
//activate
const app = express()
app.use(cors())
const router = express.Router()

//API using routes
router.get("/songs", function(req, res){
    const songs = [{
        title: "Another song",
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", 'boogie']
    },{
        title: "We found love",
        artist: "Rhianna",
        popularity: 10,
        genre: "electro house"
    }
];

    res.json(songs)
})

//add api to url
app.use("/api", router)
app.listen(3000)