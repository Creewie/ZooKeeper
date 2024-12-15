import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve("data", "zoo.json")

export async function getAllAnimals() {
    try{
        const data = await fsPromises.readFile(filePath, 'utf8');
        return JSON.parse(data);
    }catch(err){
        throw new Error(`Bład przy pobieraniu zoo.json, ${err.message}`);
    }
}
async function saveData(animals){
    try{
        await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8')
    }
    catch(err){
        throw new Error("Nie udało się zapisać danych w zoo.json " + err.message)
    }
}