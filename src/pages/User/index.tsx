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
import { IUser } from "../../interfaces/user";
import { useModal } from "../../hooks/useModal";
import { useGlobal } from "../../contexts/global/GlobalContext";
import ModalUser from "../../components/ModalUser";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState<IUser | null>(null);
  const {
    fetchUsers,
    users,
    error,
    setError,
    handleDeleteUser,
    handleAddUser,
    handleEditUser,
  } = useGlobal();

  useEffect(() => {
    try {
      setLoading(true);
      fetchUsers();
    } catch (err) {
      setError("Failed to fetch users");
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
            <b>Usuários: {users.length}</b>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Icon type="add" />}
            onClick={() => {
              setEditUser(null); // Limpa o estado de edição
              open();
            }}
          >
            Adicionar Novo Usuário
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Users Table */}
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
                    <TableCell>EMAIL</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((seller, key) => (
                    <TableRow key={key} hover>
                      <TableCell>{seller.id}</TableCell>
                      <TableCell>{seller.name}</TableCell>
                      <TableCell>{seller.email}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditUser(seller);
                            open();
                          }}
                        >
                          <Icon type="edit" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteUser(Number(seller.id))}
                        >
                          <Icon type="delete" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {users.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={10} align="center">
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ py: 4 }}
                        >
                          No users found. Click "Add New User" to get started.
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

      <ModalUser
        key={editUser ? editUser.id : "new"}
        open={isOpen}
        handleClose={close}
        initialValues={editUser || {}}
        isEdit={!!editUser}
        onSubmit={async (values) => {
          if (editUser) {
            await handleEditUser(Number(editUser.id), values);
          } else {
            await handleAddUser(values);
          }
          close();
          // Atualize a lista de clientes após submit
        }}
      />
    </Box>
  );
};

export default User;
