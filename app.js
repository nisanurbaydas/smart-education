const express = require('express');
const pageRoute = require('./routes/pageRoute');

const app = express();

//Template Engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

app.use('/', pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Sever is running on port: ${port}`);
});
