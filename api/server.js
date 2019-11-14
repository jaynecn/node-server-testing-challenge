const express = require('express');

const Members = require('../webeu3/webeu3Model');

const server = express();

// plug middleware
server.use(express.json());

// GET requests
server.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to the other bit of the server'})
})

server.get('/members', (req, res) => {
  Members.getAll()
    .then(member => {
      res.status(200).json(member);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error ' + error.message });
    })
})

// POST request
server.post('/members', (req, res) => {
  const memberData = req.body;

  Members.add(memberData)
    .then(data => {
      res.status(201).json({ message: 'member created with ID no ' + data });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to create member ' + error.message });
    })
})

// DELETE request
server.delete('/members/:id', (req, res) => {
  const { id } = req.params;

  Members.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find member with given id' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete scheme ' + error.message });
    });
  
})

// catch-all endpoint
server.get('*', handleDefault);
function handleDefault(req, res) {
  {res.json('hello from the node server testing challenge')}
}

module.exports = server;