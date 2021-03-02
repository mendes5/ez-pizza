import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";

import Page from "./pages";
import React from "react";
import ReactDOM from "react-dom";
import SnackbarProvider from "react-simple-snackbar";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
