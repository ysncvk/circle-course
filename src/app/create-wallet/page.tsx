"use client";

import Text from "@/components/text";
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

let sdk: W3SSdk;

export default function CreateWallet() {
  const [loading, setLoading] = useState(false);

  const [walletResult, setWalletResult] = useState(
    "wallet has not been created yet...!"
  );

  const handleCreatWallet = () => {
    setLoading(false);
    console.log(sdk);
    const challengeId = process.env.NEXT_PUBLIC_CHALLENGE_ID || "";

    sdk.setAppSettings({
      appId: process.env.NEXT_PUBLIC_APP_ID || "",
    });

    console.log(sdk);
    console.log("set the app settings");
    sdk.setAuthentication({
      userToken: process.env.NEXT_PUBLIC_USER_TOKEN || "",
      encryptionKey: process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "",
    });
    console.log("set the authentication");
    try {
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
      setWalletResult("wallet is created... congrulations...:)");
      console.log("wallet", walletResult);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sdk = new W3SSdk();
  }, []);

  return (
    <Container>
      <Box
        sx={{ backgroundColor: "#8e44ad" }}
        borderRadius={3}
        padding={1}
        textAlign="center"
        marginTop={3}
      >
        <Typography variant="h5">Create User-Controlled Wallet</Typography>
      </Box>
      <Stack direction="column" alignItems="left" paddingTop={3} gap={2}>
        <Typography>App Id:</Typography>

        <Text text={process.env.NEXT_PUBLIC_APP_ID || ""} />

        <Typography>User Token:</Typography>

        <Text text={process.env.NEXT_PUBLIC_USER_TOKEN || ""} />

        <Typography>Encrption Key:</Typography>
        <Text text={process.env.NEXT_PUBLIC_ENCRYPTION_KEY || ""} />

        <Typography>Challenge ID:</Typography>

        <Text text={process.env.NEXT_PUBLIC_CHALLENGE_ID || ""} />

        <LoadingButton
          size="small"
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleCreatWallet}
          loading={loading}
        >
          Create Wallet
        </LoadingButton>

        <Text text={walletResult} />

        <Box
          sx={{ backgroundColor: "#8e44ad" }}
          borderRadius={3}
          padding={1}
          textAlign="center"
          marginTop={3}
        >
          <Link href="/">
            <h2>
              Go to home page<span>-&gt;</span>
            </h2>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
