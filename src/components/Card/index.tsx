import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "../CustomIcon";
import CustomTooltip from "../Tooltip";
import { IDashboardClient } from "../../interfaces/client";

const users = {
  hired: 30,
  active: 40,
  scheduling: 50,
  medicalRecords: 60,
};

export default function ClinicCard({ client }: { client: IDashboardClient }) {
  return (
    <Card
      sx={{
        backgroundColor: "#ededed",
        maxWidth: 350,
        flex: "1 1 300px",
        p: 1,
      }}
      style={client.isOnline ? {} : { backgroundColor: "red" }}
    >
      <CardContent
        style={
          client.isOnline
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }
            : {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }
        }
      >
        <Box
          component={"div"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -10,
          }}
        >
          <CustomTooltip title={client.client_name}>
            <Typography
              sx={{ fontSize: 14, lineHeight: 1 }}
              style={{
                maxWidth: 200,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
              }}
            >
              {client.client_name?.toUpperCase()}
            </Typography>
          </CustomTooltip>
          <Box
            component={"div"}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            {client.isOnline ? (
              <>
                <Typography sx={{ fontSize: 14 }}>Online</Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "green",
                    marginRight: 1,
                  }}
                />
              </>
            ) : (
              <>
                <Typography sx={{ fontSize: 14 }}>Offline</Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "red",
                    marginRight: 1,
                  }}
                />
              </>
            )}
          </Box>
        </Box>
        <Box
          component={"div"}
          sx={{ mt: 1 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <CustomTooltip title="Total de usuários contratados">
            <Typography
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              sx={{ fontSize: 15 }}
              color="text.secondary"
            >
              <Icon style={{ color: "blue" }} type="people" /> {users.hired}
            </Typography>
          </CustomTooltip>

          <CustomTooltip title="Total de usuários ativos">
            <Typography
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              sx={{ fontSize: 15 }}
              color={users.active > users.hired ? "error" : "text.secondary"}
            >
              <Icon style={{ color: "blue" }} type="person_add" />{" "}
              {users.active}
            </Typography>
          </CustomTooltip>
          {/* <CustomTooltip title="Total de agendamentos">
            <Typography
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              sx={{ fontSize: 15 }}
              color={users.active === 0 ? "error" : "text.secondary"}
            >
              <Icon type="today" />{" "}
              {client.validaRecebimento.total_agendamentos || 0}
            </Typography>
          </CustomTooltip> */}
          <CustomTooltip title="Dias sem agendamento">
            <Typography
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              sx={{ fontSize: 15 }}
              color={users.active === 0 ? "error" : "text.secondary"}
            >
              <Icon type="event_busy" />{" "}
              {client.validaRecebimento.dias_sem_agendamento || 0}
            </Typography>
          </CustomTooltip>
          <CustomTooltip title="Dias sem receber">
            <Typography
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              sx={{ fontSize: 15 }}
              color={users.active === 0 ? "error" : "text.secondary"}
            >
              <Icon
                type="money_off"
                style={
                  client.validaPagamento.dias_sem_venda > 10
                    ? { color: "red" }
                    : {}
                }
              />{" "}
              {client.validaPagamento.dias_sem_venda || 0}
            </Typography>
          </CustomTooltip>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
