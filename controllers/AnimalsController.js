import * as AnimalsService from "../services/AnimalsService.js";

export const getAllAnimals = async (req, res) => {
    try{
        const animals = await AnimalsService.getAllAnimals()
        res.json({animals});
    }catch(err){
        res.status(500).json({error: "Nie udało się wydobyć zwierząt z ZOO " + err.message});
    }
}
export const getAnimalsById = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const animal = await AnimalsService.getAnimalsById(id)
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

export const getAnimalsByHabitat = async (req, res) => {
    try{
        const habitat = req.params.habitat
        const animals = await AnimalsService.getAnimalsByHabitat(habitat)
        res.json(animals)
    }catch(err){
        res.status(500).json({error: "Nie udało się znaleźć środowiska" + err.message})
    }
}

export const getAnimalsBySpieces = async (req, res) => {
    try{
        const species = req.params.species
        const animals = await AnimalsService.getAnimalsBySpieces(species)
        res.json(animals)
    }catch(err){
        res.status(500).json({error: "Nie udało się znaleźć takiego gatunku" + err.message})
    }
}
export const addAnimal = async (req, res) => {
    try{
        const animal = req.body
        console.log(animal)
        const newAnimal = await AnimalsService.addAnimal(animal)
        res.status(201).json(newAnimal)
    }
    catch (err) {
        res.status(500).json({error: "Nie udało się dodać zwierzaka: " + err.message})
    }
}
export const updateAnimal = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const animalData = req.body
        const updatedAnimal = await AnimalsService.updateAnimal(id, animalData)
        if(!updatedAnimal) {
            res.status(400).json({error: "Nie udało się edytować"})
        }
        res.json(updatedAnimal)
    }catch(err){
        res.status(500).json({error: "Nie udało się zmienić zwierzaka: " + err.message})
    }
}
export const deleteAnimal = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const deleted = await AnimalsService.deleteAnimal(id)
        if(!deleted) {
            res.status(404).json({error: "Nie udało się usunąć"})
        }
        res.status(204).json(deleted)
    }
    catch (err) {
        res.status(500).json({error: " Nie udało się usunąć zwierzaka " + err.message})
    }
}