import express from 'express';

const app = express();
const port= process.env.PORT || 3000;


app.get('/animals', (req, res) => {
    res.send("Tu będą zwierzontka")
})

app.listen(port, ()=>{
    console.log("Serwer na hoście: " + port);
});
