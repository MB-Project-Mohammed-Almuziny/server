const rolesModel = require("./../../db/models/roles");

const createRole = (req, res) => {
  try {
    const { role } = req.body;

    const newRole = new rolesModel({
      role,
    });

    newRole
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createRole };
