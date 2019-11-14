const server = require('./api/server');

// server listen
server.listen(process.env.PORT || 6000, () => {
  console.log('listening on the server ' + (process.env.PORT || 6000 ));
})