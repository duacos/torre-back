const profileStore = require("../store/profileStore");

const show = async (username) => {
  const profile = await profileStore.getOne(username);

  return profile;
};
module.exports = {
  show,
};
