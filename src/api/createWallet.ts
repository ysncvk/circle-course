import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";

let sdk: W3SSdk;

export const create_wallet = async () => {
  sdk = new W3SSdk();
  console.log(sdk);

  console.log("created the sdk");
  const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID || "";

  sdk.setAppSettings({
    appId: process.env.NEXT_PUBLIC_APP_ID || "",
  });

  console.log(sdk);
  console.log("set the app settings");
  sdk.setAuthentication({
    userToken: process.env.NEXT_PUBLIC_USER_TOKEN || "",
    encryptionKey: "n35iol9izs1nRhOXUWadfFgoXIom0RPAMdJ0+26KxMI=",
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

  return "wallet has benn created....";
};
