
const express = require('express');

const app = express();

app.use(express.json());

const translateRoutes = require('./route/translate');



app.use("/", translateRoutes);


const port = 6000;
app.listen(port, async () => {

    console.log(`running on port ${port}`);
})