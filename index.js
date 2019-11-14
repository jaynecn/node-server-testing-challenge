const express = require('express');

const server = express();

// plug middleware
server.use(express.json());

// catch-all endpoint
server.get('*', handleDefault);
function handleDefault(req, res) {
  {res.json('hello from the node server testing challenge')}
}

// server listen
server.listen(process.env.PORT || 6000, () => {
  console.log('listening on the server ' + (process.env.PORT || 6000 ));
})