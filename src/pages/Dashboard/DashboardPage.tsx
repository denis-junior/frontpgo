import {
  Box,
  Button,
  // Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
// import Icon from "../../components/CustomIcon";
import ClinicCard from "../../components/Card";
import { useGlobal } from "../../contexts/global/GlobalContext";
import { IDashboardClient } from "../../interfaces/client";

const DashboardPage: React.FC = () => {
  const { dashboardClients, fetchDashboardData } = useGlobal();
  const [sortedClients, setSortedClients] = React.useState<IDashboardClient[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Ordena por offline (false) antes de online (true)
  const sortByOnline = () => {
    const sorted = [...dashboardClients].sort((a, b) => {
      return a.isOnline === b.isOnline ? 0 : a.isOnline ? 1 : -1;
    });
    setSortedClients(sorted);
  };

  // Ordena por maior dias sem receber pagamento
  const sortByPagamento = () => {
    const sorted = [...dashboardClients].sort((a, b) => {
      const diasA = a.validaPagamento?.dias_sem_venda ?? 0;
      const diasB = b.validaPagamento?.dias_sem_venda ?? 0;
      return diasB - diasA;
    });
    setSortedClients(sorted);
  };

  // Ordena por usuário ativo (activeUser: boolean)
  const sortByUsuarioAtivo = () => {
    // const sorted = [...dashboardClients].sort((a, b) => {
    //   return a.activeUser === b.activeUser ? 0 : a.activeUser ? -1 : 1;
    // });
    // setSortedClients(sorted);
  };

  const clientsToShow = sortedClients.length > 0 ? sortedClients : dashboardClients;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          <b>Dashboard: {dashboardClients.length} Clientes</b>
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            onClick={sortByOnline}
          >
            ONLINE
          </Button>
          <Button
            variant="contained"
            onClick={sortByPagamento}
          >
            PAGAMENTO
          </Button>
          <Button
            variant="contained"
            onClick={sortByUsuarioAtivo}
          >
            USUÁRIO ATIVO
          </Button>
        </Box>
      </Box>
      {/* <Paper sx={{ width: "100%", overflow: "hidden", pb: 2, height: "100%" }}> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start", // ou "center"
          alignItems: "baseline",
          gap: 2,
        }}
      >
        {clientsToShow.length > 0 ? (
          clientsToShow.map((client: IDashboardClient, key: number) => (
            <ClinicCard key={key} client={client} />
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ gridColumn: "1 / -1", textAlign: "center" }}
          >
            No clients found
          </Typography>
        )}
      </Box>
      {/* </Paper> */}
    </Box>
  );
};

export default DashboardPage;
