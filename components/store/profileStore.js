import axios from "axios";

const getOne = async (username) => {
  try {
    const res = await axios.get(`https://bio.torre.co/api/bios/${username}`);
    return res.data;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getOne,
};
