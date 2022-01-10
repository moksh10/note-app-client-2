import axios from "axios";

export default axios.create({
  baseURL: "https://git.heroku.com/note-dusk-server-2.git",
  withCredentials: true,
  credentials: "include",
  timeout: 30000
})