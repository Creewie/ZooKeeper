import * as AnimalsService from "../services/AnimalsService.js";

export const getAllAnimals = async (req, res) => {
    try{
        const animals = await AnimalsService.getAllAnimals()
        res.json(animals);
    }catch(err){
        res.status(500).json({error: "Nie udało się wydobyć zwierząt z ZOO " + err.message});
    }
}