///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;

////////////////////////////
// DEPENDENCIES
////////////////////////////
const Koa = require("koa");
const cors = require('koa-better-cors')
const corsConfig = require('./config/corsConfig')
const kBody = require("koa-body");
const app = new Koa();
const morgan = require("koa-morgan");
const {log} = require("mercedlogger")
const rootRouter = require("./controllers/rootRouter");


/////////////////////////////
// MIDDLEWARE
/////////////////////////////
app.use(cors(corsConfig))
app.use(kBody()); // JSON a & URLENCODED Data Parser (ctx.request.body)
app.use(morgan("tiny")); //Logger

/////////////////////////////
//Routes and Routing
/////////////////////////////
app.use(rootRouter.routes()).use(rootRouter.allowedMethods()); //In Controllers Folder

//////////////////////////
// App Listener
//////////////////////////
app.listen(PORT, () => {
  log.green("Server Start", `listening on port ${PORT}`);
});
