import { BasicUrl } from "../Constants/Constant";
import axios from "axios";

const instance = axios.create({
  baseURL: BasicUrl,
   
  
});
export default instance