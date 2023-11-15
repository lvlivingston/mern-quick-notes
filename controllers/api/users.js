const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    newNote
};
  
async function create(req, res) {
  try {
    const user = await User.create(req.body);

    const token = createJWT(user);
    console.log(token);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error()
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error()
    res.json(createJWT(user))
  } catch (err) {
    console.log(err)
    res.status(400).json('Bad Credentials')
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

function newNote(req, res) {
  
}

// Helper functions
function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}