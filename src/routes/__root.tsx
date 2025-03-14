import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Sidebar from "../components/sidebar";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Container from "@mui/material/Container";
import Localization from "../utils/Localization";
import { Box, ListItemContent, Typography } from "@mui/joy";

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
  component: () => (
    <Localization>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <List>
            {SidebarItems.map((item) => (
              <ListItem key={item.title}>
                <ListItemContent>
                  <Typography level="title-sm">{item.title}</Typography>
                </ListItemContent>
                {/* <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to={item.to}
              >
                {item.title}
              </Link> */}
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
          <Outlet />{" "}
        </Box>
      </Box>
    </Localization>
  ),
});
