import express from 'express';

const app = express();
const port= process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Działa powiedzmy")
})

app.listen(port, ()=>{
    console.log("Serwer na hoście: " + port);
});
