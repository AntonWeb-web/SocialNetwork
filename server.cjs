const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
const port = 3000

const image = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

const placeHolderData = {
    posts: [
        { id: 1, ava: image, username: 'Artur', date: '21.06.2022 в 18:32', text: 'Hello my server' },
        { id: 2, ava: image, username: 'Anton', date: '12.06.2022 в 12:07', text: 'My post' },
        { id: 3, ava: image, username: 'Patrick', date: '07.06.2022 в 06:56', text: 'Hello' },
    ],
    profile: {
        id: 1,
        username: 'Артур',
        surname: 'Пирожков',
        city: 'Москва',
        age: '25',
        description: 'Пишу трек, занимаюсь танцами, люблю фонк и камеди клаб'
    },

}

app.get('/api/posts', (req, res) => {
    res.json(placeHolderData.posts)
})

app.get('/api/profile', (req, res) => {
    res.json(placeHolderData.profile)
})

app.listen(port, () => {
    console.log('Server work')
})
