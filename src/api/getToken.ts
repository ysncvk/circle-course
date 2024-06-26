import axios from "axios";

export const acquire_session_token = async () => {
  try {
    const options = {
      method: "POST",
      url: "https://api.circle.com/v1/w3s/users/token",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      data: { userId: process.env.NEXT_PUBLIC_USER_ID },
    };

    const response = await axios.request(options);
    return {
      userToken: response.data.data.userToken,
      encryptionKey: response.data.data.encryptionKey,
    };
  } catch (error) {
    console.error(error);
  }
};
