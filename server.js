///////////////////////////
// Environmental Variables
///////////////////////////
if (process.env.NODE_ENV === "development"){
    // env.yaml only used in development, npm run dev
    // will error if file does not exist
    const yenv = require('yenv')
    const env = yenv('env.yaml', { env: process.env.NODE_ENV })
    process.env = {...process.env, ...env}
}


////////////////////////////
// DEPENDENCIES
////////////////////////////
const Koa = require("koa");
const cors = require('koa-better-cors')
const corsConfig = require('./config/corsConfig')
const kBody = require("koa-body");
const app = new Koa();
const PORT = process.env.PORT || 3000;
const morgan = require("koa-morgan");
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
  console.log(`listening on port ${PORT}`);
});
