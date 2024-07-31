const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
const port = 3000

const image = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

const placeHolderData = {
    posts: [
        {id: 1, ava: image, name: 'Artur', text: 'Hello my server'},
        {id: 2, ava: image, name: 'Anton', text: 'My post'},
        {id: 3, ava: image, name: 'Patrick', text: 'Hello'},
    ],
}

app.get('/api/posts', (req, res) => {
    res.json(placeHolderData.posts)
})

app.listen(port, () => {
    console.log('Server work')
})
