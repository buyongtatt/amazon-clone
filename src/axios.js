import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/cl-63edc/us-central1/api",
});

export default instance;
