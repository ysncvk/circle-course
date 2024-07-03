import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const create_a_new_user = async () => {
  const userId = uuidv4();

  try {
    const options = {
      method: "POST",

      url: "https://api.circle.com/v1/w3s/users",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      data: { userId: userId },
    };

    const response = await axios.request(options);
    console.log(response);
    return {
      userId: userId,
      status: response.data.data.status,
    };
  } catch (error) {
    console.error(error);
  }
};
