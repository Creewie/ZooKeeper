import express from 'express';
import * as AnimalsController from './controllers/AnimalsController.js';

const app = express();
const port= process.env.PORT || 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Następne strony:<br> " +
        "<a href='http://localhost:3000/animals'>Wszystkie zwierzęta</a><br>")
})

app.get("/animals", AnimalsController.getAllAnimals)
app.get("/animals/endangered/", AnimalsController.getEndangeredAnimals)
app.get("/animals/habitat/:habitat", AnimalsController.getAnimalsByHabitat)
app.get("/animals/species/:species", AnimalsController.getAnimalsBySpieces)
app.post("/animals", AnimalsController.addAnimal)
app.put("/animals/:id", AnimalsController.updateAnimal)
app.delete("/animals/:id", AnimalsController.deleteAnimal)
app.get("/animals/:id", AnimalsController.getAnimalsById)

app.listen(port, ()=>{
    console.log("Serwer na hoście: " + port);
});
