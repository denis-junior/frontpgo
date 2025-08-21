import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../CustomIcon";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerIcons: Record<string, string> = {
    Dashboard: "dashboard",
    Contratos: "assignment",
    Clientes: "people",
    Vendedores: "group",
    Usuários: "person",
    Funções: "functions",
  };

  const drawerRoutes: Record<string, string> = {
    Dashboard: "/dashboard",
    Contratos: "/contract",
    Clientes: "/client",
    Vendedores: "/seller",
    Usuários: "/user",
    Funções: "/functions",
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const DrawerList = (
    <>
      <DrawerHeader >
        <Typography
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          sx={{ mr: 2, ml: 1, fontSize: "1.1rem" }}
        >
          <Icon type="person" style={{color: "#757575"}} />
          Olá, {user?.name}
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <Icon type="chevron_left" />
          {/* <ChevronLeftIcon /> */}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {Object.keys(drawerIcons).map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(drawerRoutes[text])}>
                <ListItemIcon>
                  <Icon type={drawerIcons[text]} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#006f75" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <Icon type="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel de Gestão Operacional
          </Typography>
          <Button
            color="inherit"
            onClick={logout}
            startIcon={<Icon type="logout" />}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="left"
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
