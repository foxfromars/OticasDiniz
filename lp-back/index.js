const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());

app.use(
  cors()
);

app.get('/', (req, res) => {
  res.send('Bem Vindo a OticaDiniz!')
})

const PerguntasRoutes = require('./routes/perguntas');
app.use('/api', PerguntasRoutes);

mongoose
  .connect(
    `mongodb+srv://auth_db:root@cluster0.eors23p.mongodb.net/Form?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(5000);
  })
  .catch((err) => console.log(err));