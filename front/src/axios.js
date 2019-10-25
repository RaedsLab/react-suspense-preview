import axios from "axios";
import { unstable_createResource as createResource } from "@luontola/react-cache";

const fetcher = createResource(async path => {
  const data = await axios.get(path).then(resp => resp.data)
  return data;
});


export default fetcher;