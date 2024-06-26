import axios from "axios";

export const get_app_id = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.circle.com/v1/w3s/config/entity",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    const response = await axios.request(options);
    return response.data.data.appId;
  } catch (error) {
    console.error(error);
  }
};
