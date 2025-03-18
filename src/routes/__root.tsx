import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Sidebar from "../components/sidebar";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Localization from "../utils/Localization";
import { Box, ListItemContent, Typography } from "@mui/joy";
import BreadCrumbs from "../components/breadcrumbs";

const SidebarItems = [
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
];

export const Route = createRootRoute({
  component: () => {
    return (
      <Localization>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Sidebar>
            <List>
              {SidebarItems.map((item) => (
                <ListItem key={item.title}>
                  <ListItemContent>
                    <Link to={item.to}>
                      <Typography level="title-sm">{item.title}</Typography>
                    </Link>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
            <TanStackRouterDevtools />
          </Sidebar>
          <Box
            sx={{
              flexGrow: 1, // Take up the remaining space
              padding: 2, // Add some padding
              overflow: "auto", // Enable scrolling if content overflows
            }}
          >
            <BreadCrumbs />
            <Outlet />{" "}
          </Box>
        </Box>
      </Localization>
    );
  },
});
