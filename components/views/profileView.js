const controller = require("../controllers/profileController");

const show = () => async (req, res) => {
  const username = req.params.username;

  const profile = await controller.show(username);

  try {
    res.status(200).send({
      error: "",
      body: profile,
    });
  } catch (error) {
    res.status(500).send({
      error: "Mensaje de error",
      body: [],
    });
  }
};
module.exports = {
  show,
};
