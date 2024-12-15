import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "../data");
const filePath = path.join(dataDir, "zoo.json");

async function loadData(){
    try{
        const data = await fs.readFile(filePath, 'utf8');
        console.log(JSON.parse(data));
        return JSON.parse(data);
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
export const getAllAnimals = async () => {
    return await loadData()
}