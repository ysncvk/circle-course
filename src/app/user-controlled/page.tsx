"use client";

import CustomText from "@/components/customText";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { useState } from "react";
import { get_app_id } from "@/api/appId";
import { create_a_new_user } from "@/api/createUser";
import { acquire_session_token } from "@/api/getToken";
import { initialize_user } from "@/api/initializeUser";
import Link from "next/link";

export default function UserControlled() {
  const [appId, setAppId] = useState("the app id will appear here");
  const [user, setUser] = useState<any>({
    userId: "User Id will appear here",
    status: "status",
  });
  const [token, setToken] = useState<any>({
    userToken: "user token will apeear here",
    encryptionKey: "encryption key will appear here",
  });
  const [challengeId, setChallengeId] = useState(
    "the challenge Id will appear here"
  );

  const handleGetAppId = async () => {
    const id = await get_app_id();
    setAppId(id);
  };
  const handleCreateUser = async () => {
    const user = await create_a_new_user();
    setUser(user);
  };

  const handleGetSessionToken = async () => {
    const token = await acquire_session_token();
    setToken(token);
  };

  const handleGetChallengeId = async () => {
    const challengeId = await initialize_user();
    setChallengeId(challengeId);
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
        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Typography>App Id:</Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleGetAppId}
          >
            Get App Id
          </Button>
        </Stack>

        <CustomText text={appId} />

        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Typography>User Id:</Typography>
          <Typography>{user?.status}</Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleCreateUser}
          >
            Create User
          </Button>
        </Stack>
        <CustomText text={user?.userId} />

        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Typography>User Token & Encrption Key</Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleGetSessionToken}
          >
            Get Session Token
          </Button>
        </Stack>
        <CustomText text={token?.userToken} />
        <CustomText text={token?.encryptionKey} />

        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Typography>Challenge ID:</Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleGetChallengeId}
          >
            Get Challenge ID
          </Button>
        </Stack>
        <CustomText text={challengeId} />
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
