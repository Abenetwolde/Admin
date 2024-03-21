import { useState } from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Sidebar = (props) => {


  const drawerWidth = 240;
  const location = useLocation();


  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const openedMixin = {
    width: drawerWidth,
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
  };
  const StyledSidebarContainer = styled('div')({

    transition: 'width 0.3s ease-in-out', // Transition effect
    overflowX: 'hidden',
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'auto',// Allow scrolling if content overflows
  });
  const closedMixin = {
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
    width: '50px',
  };

  const drawerHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '8px',
  };


  const drawerStyle = (open) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ... (open ? openedMixin : closedMixin),
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };




  const createLinks = (routes) => {
    return routes
      .filter((route) => route.path !== "/login")
      .map((prop, key) => {
        const isActive = location.pathname.includes(prop.layout + prop.path);
        const listItemStyle = {
          // backgroundColor: isActive ? 'lightblue' : 'transparent',
          borderLeft: isActive ? '2px solid blue' : 'none',
        };

        return (
          <ListItem
            button
            component={NavLinkRRD}
            to={prop.layout + prop.path}
            key={key}
            style={listItemStyle}
          >
            <ListItemIcon sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>{prop.icon}</ListItemIcon>
            <ListItemText primary={prop.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        );
      });
  };
  const { routes, logo } = props;

  return (
    <StyledSidebarContainer style={drawerStyle(open)}>
      <div>
        <div style={drawerHeaderStyle}>
          <img src={"https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/309594003_479073510925896_4418903135455341959_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X3yeRAplDhQAX_93WQE&_nc_ht=scontent.fadd2-1.fna&oh=00_AfBNzUyiG_gxdU5odv7PCOZ-fQsjcks-jCLArsVItRO81Q&oe=6601F8C8"} alt="Logo" style={{ marginRight: '8px', height: '30px' }} />
          <IconButton onClick={handleDrawerClose}>
            {open ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </div>
        <Divider />
        {createLinks(routes)}

      </div>

    </StyledSidebarContainer>
  );
};

export default Sidebar;
