const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

let users = {}
//{ 0: { name: 'admin', password: '1234' }}

//AUTH
server.post('/auth', function(req, res){
  let user = req.body;
  users = {...users, user};
  console.log('TEST AUTH: ', users.user);
  res.json(users);
})

//LOGIN
server.get('/login', function(req, res){
  console.log('TEST LOGIN:' ,Object.values(users.user).shift());
  res.json(Object.values(users.user).shift())
})

server.listen(3001);