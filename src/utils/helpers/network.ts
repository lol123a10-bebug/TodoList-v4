import axios from "axios";
import { firebaseUrl } from "../constants/network";

export const fetchData = async (url: string = "") => {
  const response = await axios.get(firebaseUrl + url);

  return response.data;
};

export const sendData = async <BodyType>(url: string = "", body: BodyType) => {
  const response = await axios.post(firebaseUrl + url, body);

  return response.data;
};

export const removeData = async (url: string = "", id: string) => {
  const response = await axios.delete(`${firebaseUrl}${url}/${id}.json`);

  return response.data;
};
