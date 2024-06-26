import axios from "axios";

export const getUserWallet = async () => {
  try {
    const options = {
      method: "GET",
      url: `https://api.circle.com/v1/w3s/wallets?userId=${process.env.NEXT_PUBLIC_USER_ID}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    return await axios.request(options);
  } catch (error) {
    console.error(error);
  }
};
