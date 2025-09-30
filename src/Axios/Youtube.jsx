import axios from "axios";
import { YoutubeUrl } from "../Constants/Constant";
const instance = axios.create({
  baseURL:YoutubeUrl,
   
  
});
export default instance