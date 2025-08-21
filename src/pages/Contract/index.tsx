import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Icon from "../../components/CustomIcon";
import { usePopover } from "../../hooks/usePopover";
import ModalChangeStatusCategory from "../../components/ModalContract/ModalChangeStatusCategory";
import { useModal } from "../../hooks/useModal";
import { useGlobal } from "../../contexts/global/GlobalContext";
import { IStatusCategory } from "../../interfaces/contract";

const Contract = () => {
  const [loading, setLoading] = useState(true);
  const {
    anchorEl,
    open: openPopoverState,
    openPopover,
    closePopover,
  } = usePopover<HTMLButtonElement>();

  const [editStatusCategory, setEditStatusCategory] =
    useState<IStatusCategory | null>(null);

  const [isSigned, setIsSigned] = useState({ id: 0, isSigned: false });

  const {
    fetchClients,
    clients,
    error,
    setError,
    //   handleDeleteContract,
    //   handleAddContract,
    handleEditContractSituation,
    handleSignContract,
    handleAcceptProposal,
    //   sellers,
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
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            <b>Contratos</b>
          </Typography>
          {/* <Button
            variant="contained"
            startIcon={<Icon type="add" />}
            onClick={() => {
              // setEditStatusCategory(null); // Limpa o estado de edição
              open();
            }}
          >
            Adicionar Novo Contrato
          </Button> */}
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Contracts Table */}
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
                    <TableCell>Usuar. Contrat.</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Assinado</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clients.map((client, key) => (
                    <TableRow key={key} hover>
                      <TableCell>{key + 1}</TableCell>
                      <TableCell>{client.nome_fantasia}</TableCell>
                      <TableCell>
                        <Typography>78</Typography>
                      </TableCell>
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
                        {client.is_signed ? (
                          <Chip
                            label={"Sim"}
                            size="small"
                            color="success"
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label={"Não"}
                            size="small"
                            color="error"
                            variant="outlined"
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={(e) => {
                            openPopover(e);
                            setIsSigned({
                              id: client.id_cliente,
                              isSigned: client.is_signed,
                            });
                            setEditStatusCategory({
                              id: client.id_cliente,
                              status: client.status,
                              categoria: client.categoria,
                            });
                          }}
                        >
                          <Icon type="list" />
                        </Button>
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
                          No clients found. Click "Add New Contract" to get
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
        <Popover
          open={openPopoverState}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  open();
                  closePopover();
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Icon type="cached" style={{ color: "green" }} /> Mudar
                      Situação
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            {(editStatusCategory?.status === "EM NEGOCIACAO" &&
            editStatusCategory?.categoria === "LEAD") || (editStatusCategory?.status === "CONVERTIDO" &&
            editStatusCategory?.categoria === "CONTRATO") ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon type="note_add" style={{ color: "green" }} />{" "}
                        Gerar Contrato
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
            {editStatusCategory?.categoria === "LEAD" && editStatusCategory?.status === "NOVO" ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon type="difference" style={{ color: "green" }} />{" "}
                        Gerar Proposta
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
            {editStatusCategory?.categoria === "LEAD" && editStatusCategory?.status === "NOVO" ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleAcceptProposal(isSigned.id);
                    closePopover();
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon type="check" style={{ color: "green" }} /> Aceitar
                        Proposta
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
            {!isSigned.isSigned  && editStatusCategory?.status === "EM NEGOCIACAO" ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleSignContract(isSigned.id);
                    closePopover();
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon type="draw" style={{ color: "green" }} /> Assinar
                        Contrato
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </List>
        </Popover>
      </Container>

      <ModalChangeStatusCategory
        open={isOpen}
        handleClose={close}
        initialValues={
          editStatusCategory || { id: 0, status: "", categoria: "" }
        }
        onSubmit={async (values) => {
          console.log("submitting values: ", values);
          await handleEditContractSituation(values);
          setEditStatusCategory(null);
          close();
          // Atualize a lista de clientes após submit
        }}
      />
      {/* <PDFDownloadLink
        document={<ContractPdf />}
        fileName="contrato-itambe.pdf"
        style={{ marginBottom: 16, display: "inline-block" }}
      >
        {({ loading }) =>
          loading ? "Gerando PDF..." : "Baixar contrato-itambe.pdf"
        }
      </PDFDownloadLink>
      <div style={{ backgroundColor: "red", height: "60vh" }}>
        <PDFViewer width={"100%"} height={"100%"}>
          <ContractPdf />
        </PDFViewer>
      </div> */}
    </Box>
  );
};

export default Contract;
