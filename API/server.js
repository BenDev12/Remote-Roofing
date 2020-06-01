const express = require("express");

const app = express();

const authRouter = require("./Routes/Auths");
const projectRouter = require("./Routes/Project");

app.use(authRouter);
app.use(projectRouter);

app.listen(5000);
