const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

const support = {
'alistar': {
    'description': 'Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.',
    'role': 'Tank',
    'difficulty': 'Moderate'
},
'zyra': {
    'description': 'Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks nothing of slaying them with flurries of deadly spines. Though her true purpose has not been revealed, Zyra wanders the world, indulging her most primal urges to colonize, and strangle all other life from it.',
    'role': 'Mage',
    'difficulty': 'Moderate'
},

'bard': {
    'description': 'A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way.',
    'role': 'support',
    'difficulty': 'High'

},
'unknown': {
    'Description': 'unknown',
    'role': 'unknown',
    'difficulty': 'unknown'
}
}

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const supportName = req.params.name.toLowerCase()
    if (support[supportName]){
        res.json(support[supportName])
    } else {
        res.json(support['unkown'])
    }
    res.json(support)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Your server is running on ${PORT}`)
})