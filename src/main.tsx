import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";

import Home from "./routes/Home";
import NotAuthorized from "./routes/NotAuthorized";
import NotAuthenticated from "./routes/NotAuthenticated";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./routes/Dashboard/Dashboard";
import Pairing from "./routes/Pairing";
import Login from "./routes/Login/Login";
import { AuthProvider } from "./contexts/authContext";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./routes/Register/Register";
import CommonLayout from "./layouts/CommonLayout";
import Profile from "./routes/Profile/Profile";
import RestrictedLayout from "./layouts/RestrictedLayout";
import AlreadyAuthenticated from "./routes/AlreadyAuthenticated";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={400}>
          <BrowserRouter basename={import.meta.env.VITE_PUBLIC_BASE_PATH!}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route element={<CommonLayout />}>
                  <Route element={<RestrictedLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/pairing" element={<Pairing />} />
                    <Route path="/profile" element={<Profile />} />
                  </Route>

                  <Route
                    path="/not-authenticated"
                    element={<NotAuthenticated />}
                  />
                  <Route
                    path="/already-authenticated"
                    element={<AlreadyAuthenticated />}
                  />
                  <Route path="/not-authorized" element={<NotAuthorized />} />
                </Route>

                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>

        <ToastContainer closeOnClick />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
