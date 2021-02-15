import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-cl-63edc.cloudfunctions.net/api",
});

export default instance;

// http://localhost:5001/cl-63edc/us-central1/api
