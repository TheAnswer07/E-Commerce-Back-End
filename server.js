const express = require('express');
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));


db.sync({ key: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Now listening to PORT 3001')
  }
  );
});
