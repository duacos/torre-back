import profileStore from "../store/profileStore";

const show = async (username) => {
  const profile = await profileStore.getOne(username);

  return {
    person: profile.person,
    stats: profile.stats,
  };
};

export default {
  show,
};
