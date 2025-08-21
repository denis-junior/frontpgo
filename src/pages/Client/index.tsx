import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Icon from "../../components/CustomIcon";
import { IClient } from "../../interfaces/client";
import ModalClient from "../../components/ModalClient";
import { useModal } from "../../hooks/useModal";
import { useGlobal } from "../../contexts/global/GlobalContext";

const Client = () => {
  const [loading, setLoading] = useState(true);
  const [editClient, setEditClient] = useState<IClient | null>(null);
  const {
    fetchClients,
    clients,
    error,
    setError,
    handleDeleteClient,
    handleAddClient,
    handleEditClient,
    sellers,
  } = useGlobal();

  useEffect(() => {
    try {
      setLoading(true);
      fetchClients();
    } catch (err) {
      setError("Failed to fetch clients");
      console.error(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isOpen, open, close } = useModal();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Actions Bar */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            <b>Clientes</b>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Icon type="add" />}
            onClick={() => {
              setEditClient(null); // Limpa o estado de edição
              open();
            }}
          >
            Adicionar Novo Cliente
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Clients Table */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>N°</TableCell>
                    <TableCell>Nome Fantasia</TableCell>
                    <TableCell>Celular</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clients.map((client, key) => (
                    <TableRow key={key} hover>
                      <TableCell>{key + 1}</TableCell>
                      <TableCell>{client.nome_fantasia}</TableCell>
                      <TableCell>{client.celular}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={client.status}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={client.categoria}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditClient(client);
                            open();
                          }}
                        >
                          <Icon type="edit" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteClient(client.id_cliente)}
                        >
                          <Icon type="delete" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {clients.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={10} align="center">
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ py: 4 }}
                        >
                          No clients found. Click "Add New Client" to get
                          started.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Container>

      <ModalClient
        key={editClient ? editClient.id_cliente : "new"}
        open={isOpen}
        handleClose={close}
        initialValues={editClient || {}}
        isEdit={!!editClient}
        onSubmit={async (values) => {
          if (editClient) {
            await handleEditClient(editClient.id_cliente, values);
          } else {
            await handleAddClient(values);
          }
          close();
          // Atualize a lista de clientes após submit
        }}
        sellers={sellers}
      />
    </Box>
  );
};

export default Client;
