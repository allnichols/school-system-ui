import { Outlet } from "react-router";
import Sidebar from "../sidebar";
import BreadCrumbs from "../breadcrumbs";

const NavItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Teachers",
    to: "/teachers",
  },
  {
    title: "Courses",
    to: "/courses",
  },
  {
    title: "Students",
    to: "/students",
  },
];

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar navItems={NavItems} />
      <div style={{ flex: 1, padding: "1rem" }}>
        <BreadCrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
