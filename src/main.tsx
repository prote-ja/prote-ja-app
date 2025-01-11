import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import "rc-slider/assets/index.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import CommonLayout from "./layouts/CommonLayout";

import { AuthProvider } from "./contexts/authContext";
import RestrictedLayout from "./layouts/RestrictedLayout";

const Home = React.lazy(() => import("./routes/Home"));
const NotAuthorized = React.lazy(() => import("./routes/NotAuthorized"));
const Dashboard = React.lazy(() => import("./routes/Dashboard/Dashboard"));
const Pairing = React.lazy(() => import("./routes/Pairing"));
const Login = React.lazy(() => import("./routes/Login/Login"));
const Register = React.lazy(() => import("./routes/Register/Register"));
const Profile = React.lazy(() => import("./routes/Profile/Profile"));
const FirstLogin = React.lazy(() => import("./routes/FirstLogin/FirstLogin"));

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={400}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<div>Carregando...</div>}>
                      <Home />
                    </Suspense>
                  }
                />

                <Route element={<CommonLayout />}>
                  <Route element={<RestrictedLayout />}>
                    <Route
                      path="/dashboard"
                      element={
                        <Suspense fallback={<div>Carregando...</div>}>
                          <Dashboard />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/pairing"
                      element={
                        <Suspense fallback={<div>Carregando...</div>}>
                          <Pairing />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <Suspense fallback={<div>Carregando...</div>}>
                          <Profile />
                        </Suspense>
                      }
                    />
                  </Route>

                  <Route
                    path="/not-authorized"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <NotAuthorized />
                      </Suspense>
                    }
                  />
                </Route>

                <Route element={<AuthLayout />}>
                  <Route
                    path="/login"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <Login />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <Register />
                      </Suspense>
                    }
                  />
                </Route>
              </Route>
              <Route path="/first-login" element={<FirstLogin />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>

        <ToastContainer closeOnClick />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
