## KOA Template

#### by Alex Merced of AlexMercedCoder.com/devNursery.com

This template is ready out of the box for making RESTful APIS, other middleware you may want to add depending on what you are doing.

- koa-views if you want to use a view engine like EJS or PUG
- koa-jwt if you want to use JWT tokens
- koa-static for static serving files

This template should allow for:

- Creating routes
- Setting CORS settings
- Parsing JSON and URLENCODED DATA from request body

- Environmental variables defined in env.yaml, so create a env.yaml that looks like this...

```yaml
development:
  PORT: 4000
  SECRET: "production"

production:
  PORT: 3000
  SECRET: "development"
```

## Commands

```npm run dev``` run dev server look for env.yaml for environmental variables

```npm run start``` run in production more, not look for env.yaml