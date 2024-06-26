"use client";

import { SnackbarProvider } from "./snackbar";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}
