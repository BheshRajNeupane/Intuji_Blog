const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv') ;

dotenv.config({path:'./config.env'});

// const DataBase = process.env.DATABASE.replace('<PASSWORD>',process.env.DB_PASSWORD);

mongoose
.connect(process.env.DATABASE)
.then( ()=>  console.log("DB connection  successful..!!"));

const port = process.env.PORT || 300;

  const server = app.listen(port, ()=>{
      console.log(`Application running on port ${port}...`);   
  }); 