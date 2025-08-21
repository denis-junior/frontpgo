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
import { useModal } from "../../hooks/useModal";
import { useGlobal } from "../../contexts/global/GlobalContext";
import ModalFunction from "../../components/ModalFunction";
import { IFunction } from "../../interfaces/function";
import ModalExecFunction from "../../components/ModalExecFunction";

const Functions = () => {
  const [loading, setLoading] = useState(true);
  const [editFunction, setEditFunction] = useState<IFunction | null>(null);
  const {
    fetchFunctions,
    functions,
    error,
    setError,
    handleDeleteFunction,
    handleAddFunction,
    handleEditFunction,
    handleExecuteFunction,
    setResultExecFunction
  } = useGlobal();

  useEffect(() => {
    try {
      setLoading(true);
      fetchFunctions();
    } catch (err) {
      setError("Failed to fetch functions");
      console.error(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isOpen, open, close } = useModal();
  const {
    isOpen: isExecOpen,
    open: openExecModal,
    close: closeExecModal,
  } = useModal();

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
            <b>Funções</b>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Icon type="add" />}
            onClick={() => {
              setEditFunction(null); // Limpa o estado de edição
              open();
            }}
          >
            Adicionar Nova Função
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
                    <TableCell>Descrição</TableCell>
                    <TableCell>Ativa</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {functions.map((func, key) => (
                    <TableRow key={key} hover>
                      <TableCell>{key + 1}</TableCell>
                      <TableCell>{func.descricao}</TableCell>
                      <TableCell>
                        <Chip
                          label={String(func.is_active)}
                          size="small"
                          color={`${func.is_active ? "success" : "error"}`}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          title="Visualizar"
                          size="small"
                          color="info"
                          onClick={() => {
                            setEditFunction(func);
                            open();
                          }}
                        >
                          <Icon type="visibility" />
                        </IconButton>
                        <IconButton
                          title="Inativar"
                          color="error"
                          size="small"
                          onClick={() => handleDeleteFunction(func.id_function)}
                        >
                          <Icon type="cancel" />
                        </IconButton>
                        <IconButton
                          title="Executar"
                          size="small"
                          color="success"
                          onClick={() => {
                            // handleExecuteFunction(func.id_function)
                            setEditFunction(func);
                            openExecModal();
                          }}
                        >
                          <Icon type="play_arrow" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {functions.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={10} align="center">
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ py: 4 }}
                        >
                          Nenhuma função encontrada. Clique em "Adicionar Nova
                          Função" para criar uma.
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

      <ModalFunction
        key={editFunction ? editFunction.id_function : "new"}
        open={isOpen}
        handleClose={close}
        initialValues={editFunction || {}}
        isEdit={!!editFunction}
        onSubmit={async (values) => {
          if (editFunction) {
            await handleEditFunction(editFunction.id_function, values);
          } else {
            await handleAddFunction(values);
          }
          close();
          // Atualize a lista de funções após submit
        }}
      />
      <ModalExecFunction
        key={editFunction ? editFunction.id_function : "new"}
        open={isExecOpen}
        handleClose={() => {
          closeExecModal();
          setResultExecFunction(null)

        }}
        initialValues={editFunction || {}}
        isEdit={!!editFunction}
        onSubmit={async (values) => {
          handleExecuteFunction(values);
          // close();
          // Atualize a lista de funções após submit
        }}
      />
    </Box>
  );
};

export default Functions;
