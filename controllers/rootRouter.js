//DEPENDENCIES
const kr = require("koa-router");
const router = kr();

//ROUTES
router.get("/", async (ctx, next) => {
  ctx.body = "Hello World";
  next();
});

router.get("/hello", async (ctx, next) => {
  ctx.body = "Hello";
  next();
});

module.exports = router;
