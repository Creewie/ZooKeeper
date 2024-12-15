import * as AnimalsService from "../services/AnimalsService.js";

export const getAllAnimals = async (req, res) => {
    try{
        const animals = await AnimalsService.getAllAnimals()
        res.json({animals});
    }catch(err){
        res.status(500).json({error: "Nie udało się wydobyć zwierząt z ZOO " + err.message});
    }
}
export const getAnimalById = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const animal = await AnimalsService.getAnimalById(id)
        res.json(animal);
    }catch(err){
        res.status(500).json({error: "Nie wiem udało się znaleźć zwierzaka o tym id" + err.message});
    }
}
export const getEndangeredAnimals = async (req, res) => {
    try{
        const animals = await AnimalsService.getEndangeredAnimals()
        res.json(animals)
    }
    catch (err) {
        res.status(500).json({error: "Nie udało się znaleźć zagrożonych gatunków " + err.message})
    }
}