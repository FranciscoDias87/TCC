const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require("./app/models");
db.sequelize.sync();


var corOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo ao Siglot' });

});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`);
});



