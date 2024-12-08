import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home";
import NotAuthorized from "./routes/NotAuthorized";
import NotAuthenticated from "./routes/NotAuthenticated";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./routes/Dashboard";
import Pairing from "./routes/Pairing";
import UserProvider from "./contexts/UserContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider delayDuration={400}>
          <BrowserRouter basename={"/prote-ja-app/"}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pairing" element={<Pairing />} />

                <Route
                  path="/not-authenticated"
                  element={<NotAuthenticated />}
                />
                <Route path="/not-authorized" element={<NotAuthorized />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>

      <ToastContainer closeOnClick />
    </QueryClientProvider>
  </StrictMode>
);
