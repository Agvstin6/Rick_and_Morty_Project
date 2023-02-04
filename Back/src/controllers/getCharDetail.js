const axios = require('axios')

const getCharDetail = (res, id) => {

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name
        }
        res.writeHead(200, {'Content-type':'application/json'})
        .end(JSON.stringify(char))
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-type':'text/plain'})
        .end(`El personaje con id:${id} no existe`)
        )

}

module.exports = getCharDetail