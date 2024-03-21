/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Login from "views/examples/Login.js";
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
