import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import "rc-slider/assets/index.css";

import MainLayout from "./layouts/MainLayout";
import NotAuthenticatedLayout from "./layouts/NotAuthenticatedLayout";
import BorderLayout from "./layouts/BorderLayout";

import { AuthProvider } from "./contexts/authContext";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import { TooltipProvider } from "./components/ui/tooltip";

const Home = React.lazy(() => import("./routes/Home"));
const NotAuthorized = React.lazy(() => import("./routes/NotAuthorized"));
const Dashboard = React.lazy(() => import("./routes/Dashboard/Dashboard"));
const Pairing = React.lazy(() => import("./routes/Pairing"));
const Login = React.lazy(() => import("./routes/Login/Login"));
const Register = React.lazy(() => import("./routes/Register/Register"));
const Profile = React.lazy(() => import("./routes/Profile/Profile"));
const FirstLogin = React.lazy(() => import("./routes/FirstLogin/FirstLogin"));
const AddDevice = React.lazy(() => import("./routes/AddDevice/AddDevice"));
const EditWearable = React.lazy(
  () => import("./routes/EditWearable/EditWearable")
);
const OutOfRange = React.lazy(() => import("./routes/OutOfRange/OutOfRange"));
const FallDetected = React.lazy(
  () => import("./routes/FallDetected/FallDetected")
);
const WearableUser = React.lazy(() => import("./routes/Wearable/Wearable"));

const AlertPage = React.lazy(() => import("./routes/AlertPage/AlertPage"));
const BuyPremium = React.lazy(() => import("./routes/BuyPremium/BuyPremium"));
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

                <Route element={<BorderLayout />}>
                  <Route element={<AuthenticatedLayout />}>
                    <Route path="dashboard">
                      <Route
                        index
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Dashboard />
                          </Suspense>
                        }
                      />

                      <Route
                        path="profile"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Profile />
                          </Suspense>
                        }
                      />
                      <Route
                        path="pairing"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Pairing />
                          </Suspense>
                        }
                      />

                      <Route
                        path="add-device"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <AddDevice />
                          </Suspense>
                        }
                      />
                      <Route
                        path="edit-wearable/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <EditWearable />
                          </Suspense>
                        }
                      />
                      <Route
                        path="out-of-range/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <OutOfRange />
                          </Suspense>
                        }
                      />
                      <Route
                        path="subscribe"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <BuyPremium />
                          </Suspense>
                        }
                      />
                      <Route
                        path="fall-detected/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <FallDetected />
                          </Suspense>
                        }
                      />
                      <Route
                        path="wearable/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <WearableUser />
                          </Suspense>
                        }
                      />
                      <Route
                        path="alerts"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <AlertPage />
                          </Suspense>
                        }
                      />
                    </Route>
                  </Route>

                  <Route
                    path="not-authorized"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <NotAuthorized />
                      </Suspense>
                    }
                  />
                </Route>

                <Route element={<NotAuthenticatedLayout />}>
                  <Route
                    path="login"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <Login />
                      </Suspense>
                    }
                  />
                  <Route
                    path="register"
                    element={
                      <Suspense fallback={<div>Carregando...</div>}>
                        <Register />
                      </Suspense>
                    }
                  />
                </Route>
              </Route>
              <Route
                path="first-login"
                element={
                  <Suspense fallback={<div>Carregando...</div>}>
                    <FirstLogin />
                  </Suspense>
                }
              />
            </Routes>
          </HashRouter>
        </TooltipProvider>

        <ToastContainer closeOnClick />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
