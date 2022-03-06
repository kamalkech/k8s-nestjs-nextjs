import axios from "axios";

export const fetchUsers = async () => {
  let users: any[] = [];
  try {
    const result = await axios.get(`${process.env.API_ENDPOINT}/users`);
    users = result.data;
  } catch (error: any) {
    console.log("error", error.message);
  }

  return users;
};
