import axios from "axios";

const instance = axios.create({

  baseURL: "https://api.github.com/search/repositories?q=created:>2017-10-22&"
});

export default instance;