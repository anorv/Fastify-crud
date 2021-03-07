const fastify = require('fastify')({
  logger: true
});

const routes = require('./routes');

// db conn
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db')
.then(()=> console.log('veikia'))
.catch(err => console.log(err));


// routes
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

routes.forEach((route, index) => {
   fastify.route(route);
   
});

// server start
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();