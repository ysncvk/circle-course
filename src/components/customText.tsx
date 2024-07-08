import Box from "@mui/material/Box";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "./snackbar";

type Props = {
  text: string;
  font?: any;
};

export default function CustomText({ text, font = "body2" }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      enqueueSnackbar("Copied to clipboard", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Failed to copy", { variant: "error" });
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      borderRadius={3}
      border="solid"
      borderColor="aliceblue"
      padding={1}
    >
      <Typography
        variant={font}
        sx={{
          minWidth: 300,
          flexGrow: 1,
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {text}
      </Typography>
      <IconButton onClick={copyToClipboard} sx={{ color: "white" }}>
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
