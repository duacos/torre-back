import profileStore from "../store/profileStore";

const show = async (username) => {
  const profile = await profileStore.getOne(username);

  return profile;
};

export default {
  show,
};
