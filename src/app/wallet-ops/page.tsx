"use client";

import { transfer } from "@/api/transfer";
import CustomText from "@/components/customText";
import TextData from "@/components/text";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WalletOps() {
  const [wallet, setWallet] = useState<any>();
  const [balance, setBalance] = useState<any>();

  const getUserWallet = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://api.circle.com/v1/w3s/wallets?userId=${process.env.NEXT_PUBLIC_USER_ID}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };
      const response = await axios.request(options);
      console.log(response);
      setWallet(response?.data?.data?.wallets[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getBalance = async () => {
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
      console.log(response);
      setBalance(response.data.data.tokenBalances[1]?.amount || 0);
    } catch (error) {
      console.error(error);
    }
  };

  const transferToken = async () => {
    try {
      const result = await transfer();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box
        sx={{ backgroundColor: "#8e44ad" }}
        borderRadius={3}
        padding={1}
        textAlign="center"
        marginTop={3}
      >
        <Typography variant="h5">User Controlled Wallet</Typography>
      </Box>
      <Stack direction="column" alignItems="left" paddingTop={3} gap={2}>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={getUserWallet}
        >
          Get Wallet
        </Button>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Wallet Id:</Typography>
          <CustomText text={wallet?.id} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Create Date:</Typography>
          <TextData text={wallet?.createDate} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Blockchain:</Typography>
          <TextData text={wallet?.blockchain} />
        </Stack>

        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={getBalance}
        >
          Get Balance
        </Button>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Balance:</Typography>
          <CustomText text={balance} />
        </Stack>

        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={transferToken}
        >
          Transfer
        </Button>

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
