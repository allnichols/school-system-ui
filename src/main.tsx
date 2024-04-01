import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({ routeTree });

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
const container = rootElement || document.createElement("div");

const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
