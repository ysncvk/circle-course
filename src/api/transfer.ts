"use server";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { acquire_session_token } from "./getToken";

export const transfer = async () => {
  try {
    const userCredentials = (await acquire_session_token()) || {
      userToken: "",
      encryptionKey: "",
    };

    const userToken = userCredentials.userToken;

    const encryptionKey = userCredentials.encryptionKey;

    const idempotencyKey = uuidv4();

    const url = "https://api.circle.com/v1/w3s/user/transactions/transfer";

    const options = {
      method: "POST",

      url: url,

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,

        "X-User-Token": userToken,
      },

      data: {
        idempotencyKey: idempotencyKey,

        userId: `${process.env.NEXT_PUBLIC_USER_ID}`,

        destinationAddress: `${process.env.NEXT_PUBLIC_ADDRESS}`,

        refId: "Circle Course Deneme",

        amounts: ["1"],

        feeLevel: "HIGH",

        tokenId: `${process.env.NEXT_PUBLIC_TOKEN_ID}`,

        walletId: `${process.env.NEXT_PUBLIC_WALLET_ID}`,
      },
    };

    console.log(options);

    const response = await axios.request(options);
    console.log(response?.data);
    console.log("user token: ", userToken);
    console.log("encryption key: ", encryptionKey);
    console.log("idempotency key: ", idempotencyKey);
  } catch (error) {
    console.error("error: (hata)" + error);
  }
};
