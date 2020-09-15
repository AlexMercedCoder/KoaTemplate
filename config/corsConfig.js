module.exports = {
  credentials: true,
  expose: ['Cache-Control','Content-Type'],
  headers: ['Accept','Content-Type'],
  maxAge: 600,
  methods: ['GET','HEAD','PUT','POST','DELETE'],
  origin: true,
}