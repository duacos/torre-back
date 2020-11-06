import controller from "../controllers/profileController";

export const show = () => async (req, res) => {
  const username = req.params.username;

  const lesson = await controller.show(username);

  try {
    res.status(200).send({
      error: "",
      body: lesson,
    });
  } catch (error) {
    res.status(500).send({
      error: "Mensaje de error",
      body: [],
    });
  }
};
