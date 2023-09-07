import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "258a3bb08a3749b0b119758ca2bce715",
  },
});
