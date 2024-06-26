import axios from "axios";

export const get_wallet_balance = async () => {
  try {
    const options = {
      method: "GET",
      url: `https://api.circle.com/v1/w3s/wallets/${process.env.NEXT_PUBLIC_WALLET_ID}/balances`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    const response = await axios.request(options);

    return response.data.data.tokenBalances[1].amount;
  } catch (error) {
    console.error(error);
  }
};
