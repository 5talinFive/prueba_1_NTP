//Traemos el paquete
const { Router } = require('express');
const data = require('../lib/data');
//Inicializamos router
const router = Router()


//creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola Prueba");
    })
    .get("/character", (req, res) => {
        var getCharacter = (id) =>
            new Promise(async (resolve, reject) => {
                try {
                    var { data: character } = await axios.get(`${URL}/${id}`);
                    resolve(character);
                } catch (error) {
                    reject("No data");
                }
            });


        res.json({
            msg: "Enlista el character",
            body: getCharacter.map((character) => {

                return charecter;
            }),
        })
        console.log(character);
    })
    

module.exports.RouterIndex = router