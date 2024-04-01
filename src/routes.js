
import Index from "views/Index.js";
import Profile from "views/Profile.js";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Login from "views/Login.js";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: <DashboardIcon/>,
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/alert",
    name: "Alerts",
    icon: <AddAlertIcon/>,
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/admins",
    name: "Admins",
    icon: <AdminPanelSettingsIcon/>,
    component: <Index />,
    layout: "/admin",
  },

  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },

];
export default routes;
