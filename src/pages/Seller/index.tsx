import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
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
import { ISeller } from "../../interfaces/seller";
import ModalSeller from "../../components/ModalSeller";
import { useModal } from "../../hooks/useModal";
import { useGlobal } from "../../contexts/global/GlobalContext";

const Seller = () => {
  const [loading, setLoading] = useState(true);
  const [editSeller, setEditSeller] = useState<ISeller | null>(null);
  const {
    fetchSellers,
    sellers,
    error,
    setError,
    handleDeleteSeller,
    handleAddSeller,
    handleEditSeller,
  } = useGlobal();

  useEffect(() => {
    try {
      setLoading(true);
      fetchSellers();
    } catch (err) {
      setError("Failed to fetch sellers");
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
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            <b>Vendedores: {sellers.length}</b>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Icon type="add" />}
            onClick={() => {
              setEditSeller(null); // Limpa o estado de edição
              open();
            }}
          >
            Adicionar Novo Vendedor
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Sellers Table */}
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
                    <TableCell>ID</TableCell>
                    <TableCell>NOME</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sellers.map((seller, key) => (
                    <TableRow key={key} hover>
                      <TableCell>{seller.id}</TableCell>
                      <TableCell>{seller.name}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditSeller(seller);
                            open();
                          }}
                        >
                          <Icon type="edit" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteSeller(Number(seller.id))}
                        >
                          <Icon type="delete" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {sellers.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={10} align="center">
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ py: 4 }}
                        >
                          No sellers found. Click "Add New Seller" to get
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

      <ModalSeller
        key={editSeller ? editSeller.id : "new"}
        open={isOpen}
        handleClose={close}
        initialValues={editSeller || {}}
        isEdit={!!editSeller}
        onSubmit={async (values) => {
          if (editSeller) {
            await handleEditSeller(Number(editSeller.id), values);
          } else {
            await handleAddSeller(values);
          }
          close();
          // Atualize a lista de clientes após submit
        }}
      />
    </Box>
  );
};

export default Seller;
