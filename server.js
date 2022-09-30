const express = require('express');
// const routes = require('./routes');
const db = require('./config/connection')
// import sequelize connection
// const { Category, Product, ProductTag, Tag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;
// app.listen(process.env.PORT || 3001)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));


db.sync({ key: false }).then(() => {
  app.listen( PORT, () => {
    console.log('Now listening to PORT 3001')
  }
    
  );

  });

// sync sequelize models to the database, then turn on the server
// async function start() {
//   await require('./config/connection').sync()
//   app.listen(process.env.PORT || 3001)
// }
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// start();