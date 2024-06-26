import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";

export const create_wallet = () => {
  const sdk = new W3SSdk();
  console.log("created the sdk");
  const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID || "";

  sdk.setAppSettings({
    appId: process.env.NEXT_PUBLIC_APP_ID || "",
  });
  console.log("set the app settings");
  sdk.setAuthentication({
    userToken: process.env.NEXT_PUBLIC_USER_TOKEN || "",
    encryptionKey: process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "",
  });
  console.log("set the authentication");

  sdk.execute(challengeId, (error, result) => {
    console.log("INSIDE THE EXECUTE METHOD");
    if (error) {
      console.log(
        `${error?.code?.toString() || "Unknown code"}: ${
          error?.message ?? "Error!"
        }`
      );

      return;
    }

    console.log(`Challenge: ${result?.type}`);
    console.log(`status: ${result?.status}`);
  });
};
