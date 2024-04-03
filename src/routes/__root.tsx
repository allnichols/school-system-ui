import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Localization from "../utils/Localization";

export const Route = createRootRoute({
  component: () => (
    <Localization>
      <Header>
        <Button>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>
        </Button>{" "}
        <Button>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/teachers"
          >
            Teachers
          </Link>
        </Button>{" "}
        <TanStackRouterDevtools />
      </Header>
      <Container style={{ marginTop: "2rem" }} maxWidth="lg">
        <Outlet />
      </Container>
    </Localization>
  ),
});
