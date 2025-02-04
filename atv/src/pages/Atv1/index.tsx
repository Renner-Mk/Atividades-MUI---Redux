import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Feedback {
  id: number;
  user: string;
  message: string;
}

const initialFeedbacks: Feedback[] = [
  { id: 1, user: "João Silva", message: "Ótimo atendimento!" },
  { id: 2, user: "Maria Souza", message: "Produto chegou antes do prazo!" },
  { id: 3, user: "Carlos Mendes", message: "Muito satisfeito com a compra." },
];

export function Atv1() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);
  const [openModal, setOpenModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState("");
  const [userName, setUserName] = useState("");

  const handleAddFeedback = () => {
    if (newFeedback.trim() && userName.trim()) {
      setFeedbacks([
        ...feedbacks,
        { id: feedbacks.length + 1, user: userName, message: newFeedback },
      ]);
      setNewFeedback("");
      setUserName("");
      setOpenModal(false);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxHeight: "600px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" gutterBottom>
          FeedBack
        </Typography>
        <Paper elevation={3}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {feedbacks.map((feedback, index) => {
              const isLastItem = index === feedbacks.length - 1;

              return (
                <Box>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>

                    <ListItemText
                      primary={feedback.user}
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          {feedback.message}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {!isLastItem && <Divider variant="inset" component="li" />}
                </Box>
              );
            })}
          </List>
        </Paper>
        <Tooltip title="Adicionar Feedback">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
            sx={{ mt: 2 }}
          >
            Adicionar Feedback
          </Button>
        </Tooltip>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            p={3}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
            width={400}
            mx="auto"
            mt={10}
          >
            <Typography variant="h6" gutterBottom>
              Deixe seu Feedback
            </Typography>
            <TextField
              fullWidth
              label="Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              margin="dense"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Feedback"
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
              margin="dense"
            />
            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddFeedback}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}
