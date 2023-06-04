import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
        <Box m="20px auto">
          <Button
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: shades.primary[300],
              color: "white",
              "&:hover": { backgroundColor: shades.primary[500] },
            }}
          >
            Shop More
          </Button>
        </Box>
      </Alert>
    </Box>
  );
};

export default Confirmation;
