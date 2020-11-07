const profileNetwork = require("../components/network/profileNetwork");

const router = (app) => {
  app.use(`/api/profile/`, profileNetwork);
};

module.exports = router;
