const Note = require('../../models/note');

module.exports = {
    create
};
  
async function create(req, res) {
  console.log(req.body);
  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}