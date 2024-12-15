import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.resolve("data", "zoo.json")

export async function getAllAnimals() {
    try{
        // console.log("Wczytywanie danych z " + filePath);
        const data = await fs.readFile(filePath, 'utf8')
        // return JSON.parse(data.replace(/^\uFEFF/, "")); //BOM
        return JSON.parse(data)
    }catch(err){
        throw new Error(`Bład przy pobieraniu zoo.json, ${err.message}`);
    }
}
async function saveData(animals){
    try{
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8')
    }
    catch(err){
        throw new Error("Nie udało się zapisać danych w zoo.json " + err.message)
    }
}
export async function getAnimalById(id){
    try{
        const animals = await getAllAnimals()
        return animals.find((animal) => animal.id === id)
    }catch(err){
        throw new Error("Nie znaleziono zwierzęta o tym ID")
    }
}
export async function getEndangeredAnimals(){
    try{
        const animals = await getAllAnimals()
        return animals.filter(animal => animal.isEndangered)
    }
    catch(err){
        throw new Error("Nie udało się znaleźć zagrożonych gatunków")
    }
}
export async function getAnimalsByHabitat(habitat){
    try{
        const animals = await getAllAnimals()
        return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase())
    }catch(err){
        throw new Error("Nie znaleziono środowiska")
    }
}