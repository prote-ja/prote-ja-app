import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import CommonLayout from "./layouts/CommonLayout";

import { AuthProvider } from "./contexts/authContext";
import RestrictedLayout from "./layouts/RestrictedLayout";

const Home = React.lazy(() => import("./routes/Home"));
const NotAuthorized = React.lazy(() => import("./routes/NotAuthorized"));
const NotAuthenticated = React.lazy(() => import("./routes/NotAuthenticated"));
const Dashboard = React.lazy(() => import("./routes/Dashboard/Dashboard"));
const Pairing = React.lazy(() => import("./routes/Pairing"));
const Login = React.lazy(() => import("./routes/Login/Login"));
const AlreadyAuthenticated = React.lazy(
  () => import("./routes/AlreadyAuthenticated")
);
const Register = React.lazy(() => import("./routes/Register/Register"));
const Profile = React.lazy(() => import("./routes/Profile/Profile"));

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
                    path="/not-authenticated"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <NotAuthenticated />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/already-authenticated"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <AlreadyAuthenticated />
                      </Suspense>
                    }
                  />
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
            </Routes>
          </HashRouter>
        </TooltipProvider>

        <ToastContainer closeOnClick />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
