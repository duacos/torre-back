import profileNetwork from "../components/network/profileNetwork";

const router = (app) => {
  app.use(`/api/profile/`, profileNetwork);
};

export default router;
