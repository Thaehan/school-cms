import { apiUrl } from "@Config/Config";
import axios from "axios";

const topicUrl = `${apiUrl}/topics`;

export const getTopics = async ({ search, ids }: { search?: any; ids?: string[] }) => {
  let url = `${topicUrl}/`;
  if (search) {
    url += `?search=${search}`;
  }
  if (ids) {
    url += `?ids=${ids}`;
  }
  const res = await axios.get(url);
  return res.data;
};
