import Box from "@mui/material/Box";
import styles from "./page.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Box
          sx={{ backgroundColor: "#8e44ad" }}
          borderRadius={3}
          padding={1}
          textAlign="center"
          marginTop={3}
        >
          <Typography variant="h5">Circle Course</Typography>
        </Box>
        <Link href="/user-controlled" className={styles.card}>
          <h2>
            Gather info and Initilaize User<span>-&gt;</span>
          </h2>
        </Link>

        <Link href="/create-wallet" className={styles.card}>
          <h2>
            Create User-Controlled wallet<span>-&gt;</span>
          </h2>
        </Link>

        <Link href="/wallet-ops" className={styles.card}>
          <h2>
            Wallet Operations<span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
