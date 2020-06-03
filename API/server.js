const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const authRouter = require("./Routes/Auths");
const projectRouter = require("./Routes/Project");
const databaseconection = require("./Util/dbConnection");
const Project = require("./Models/Project");
const Task = require("./Models/Task");
const User = require("./Models/User");

const app = express();

// allowing cross origin resource sharing

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,DELETE,POST,HEAD");
  res.header("Access-Control-Expose-Headers", "Connect-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept,Authorizations,Content-type,X-requested-with,Range"
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
app.use(projectRouter);
// creating associations

Project.belongsTo(User);
Task.belongsTo(Project, { constrain: true, onDelet: "CASCADE" });
Project.hasMany(Task);

databaseconection
  .sync()
  .then((result) => {
    console.log("Database connection sucessful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
