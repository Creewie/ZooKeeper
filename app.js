import express from 'express';
import * as AnimalsController from './controllers/AnimalsController.js';

const app = express();
const port= process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Następne strony:<br> " +
        "<a href='http://localhost:3000/animals'>Wszystkie zwierzęta</a><br>")
})

app.get("/animals", AnimalsController.getAllAnimals)
app.get("/animals/endangered/", AnimalsController.getEndangeredAnimals)
app.get("/animals/habitat/:habitat", AnimalsController.getAnimalByHabitat)
app.get("/animals/:id", AnimalsController.getAnimalById)

app.listen(port, ()=>{
    console.log("Serwer na hoście: " + port);
});
