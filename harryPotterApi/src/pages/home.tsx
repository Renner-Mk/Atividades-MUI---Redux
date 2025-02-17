import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ChangeEvent, MouseEvent, useEffect } from "react";
import { fetchCharacters } from "../redux/slices/bruxos";
import { changePage, changeRowsPerPage } from "../redux/slices/Paginantion";

export function Home() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.character);
  const pagination = useAppSelector((state) => state.pagination);

  console.log(characters);

  const initialPositionPage =
    pagination.rowsPerPage * (pagination.currentPage - 1);

  const handleRowsChangePage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRowsPerPage(parseInt(e.target.value)));
  };

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    dispatch(changePage(page + 1));
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={5} sx={{ marginTop: 3 }}>
        {characters
          .slice(
            initialPositionPage,
            initialPositionPage + pagination.rowsPerPage
          )
          .map((character) => (
            <Grid size={{ md: 4, sm: 12 }}>
              <Card
                key={character.id}
                sx={{
                  maxWidth: 300,
                  height: "400px",
                  position: "relative",
                  margin: "0 0 25px 0",
                }}
                elevation={6}
              >
                <CardMedia
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",

                    "&:after": character.image
                      ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0, .35)",
                        }
                      : {},
                  }}
                  image={character.image}
                  title={character.name}
                >
                  <CardContent sx={{ zIndex: "2" }}>
                    <Typography
                      variant="body2"
                      sx={{ color: character.image ? "white" : "black" }}
                    >
                      {character.dateOfBirth}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: character.image ? "white" : "black" }}
                    >
                      {character.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: character.image ? "white" : "black" }}
                    >
                      Bruxo: {character.wizard ? "Sim é Bruxo" : "Não é Bruxo"}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: character.image ? "white" : "black" }}
                    >
                      Casa:
                      {character.house !== "" ? character.house : " Não Possui"}
                    </Typography>
                  </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        <TablePagination
          component="div"
          count={characters.length}
          page={pagination.currentPage - 1}
          rowsPerPage={pagination.rowsPerPage}
          labelRowsPerPage="Personagens por página"
          labelDisplayedRows={({ from, to, count }) =>
            `${from} - ${to} de ${count}`
          }
          rowsPerPageOptions={[3, 6, 9, 12]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsChangePage}
        />
      </Grid>
    </Container>
  );
}
