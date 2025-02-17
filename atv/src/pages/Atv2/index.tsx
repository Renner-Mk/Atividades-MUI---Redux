import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Container, Divider, Typography } from "@mui/material";

export function Atv2() {
  const dispatch = useDispatch();

  const balance = useSelector((state: RootState) => state.balance);

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ccc",
      }}
    >
      <Typography variant="h4">Transações</Typography>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Saldo</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5">R$ + 2025.00</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4">Histórico</Typography>
        <Divider variant="fullWidth"></Divider>
      </Box>
    </Container>
  );
}
