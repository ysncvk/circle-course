import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  text: string;
};

export default function TextData({ text }: Props) {
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
        variant="body2"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          wordBreak: "break-word",
          overflowWrap: "break-word",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }} // Limits the text to 2 lines
      >
        {text}
      </Typography>
    </Box>
  );
}
