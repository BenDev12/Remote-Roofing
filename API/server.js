const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const sequelize = require("./Util/db");

const authRouter = require("./Routes/Auths");
const projectRouter = require("./Routes/Project");

app.use(bodyParser.json());

app.use(authRouter);
app.use(projectRouter);

// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.listen(5000);
