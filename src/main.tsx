import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
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
const Dashboard = React.lazy(() => import("./routes/Dashboard/Dashboard"));
const Login = React.lazy(() => import("./routes/Login/Login"));
const Register = React.lazy(() => import("./routes/Register/Register"));
const Profile = React.lazy(() => import("./routes/Profile/Profile"));
const FirstLogin = React.lazy(() => import("./routes/FirstLogin/FirstLogin"));
const Pairing = React.lazy(() => import("./routes/Pairing/Pairing"));

const AlertPage = React.lazy(() => import("./routes/AlertPage/AlertPage"));
const BuyPremium = React.lazy(() => import("./routes/BuyPremium/BuyPremium"));

// Wearables
const Wearables = React.lazy(() => import("./routes/Wearables/Wearables"));
const WearablesView = React.lazy(
  () => import("./routes/Wearables/WearablesView/WearablesView")
);
const WearablesEdit = React.lazy(
  () => import("./routes/Wearables/WearablesEdit/WearablesEdit")
);

// Device
const DeviceAdd = React.lazy(
  () => import("./routes/Device/DeviceAdd/DeviceAdd")
);
const DeviceFallDetected = React.lazy(
  () => import("./routes/Device/DeviceFallDetected/DeviceFallDetected")
);
const DeviceOutOfRange = React.lazy(
  () => import("./routes/Device/DeviceOutOfRange/DeviceOutOfRange")
);

// Totems
const Totems = React.lazy(() => import("./routes/Totems/Totems"));
const TotemsView = React.lazy(
  () => import("./routes/Totems/TotemsView/TotemsView")
);
const TotemsEdit = React.lazy(
  () => import("./routes/Totems/TotemsEdit/TotemsEdit")
);
const TotemsPairing = React.lazy(
  () => import("./routes/Totems/TotemsPairing/TotemsPairing")
);

// Constants
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={400}>
          <BrowserRouter>
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
                    </Route>
                    <Route
                      path="alerts"
                      element={
                        <Suspense fallback={<div>Carregando...</div>}>
                          <AlertPage />
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
                    <Route path="wearables">
                      <Route
                        index
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Wearables />
                          </Suspense>
                        }
                      />

                      <Route
                        path="view/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <WearablesView />
                          </Suspense>
                        }
                      />

                      <Route
                        path="edit/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <WearablesEdit />
                          </Suspense>
                        }
                      />
                    </Route>
                    <Route path="device">
                      <Route
                        path="add"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <DeviceAdd />
                          </Suspense>
                        }
                      />
                      <Route
                        path="fall-detected/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <DeviceFallDetected />
                          </Suspense>
                        }
                      />
                      <Route
                        path="out-of-range/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <DeviceOutOfRange />
                          </Suspense>
                        }
                      />
                    </Route>

                    <Route path="totems">
                      <Route
                        index
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Totems />
                          </Suspense>
                        }
                      />
                      <Route
                        path="view/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <TotemsView />
                          </Suspense>
                        }
                      />
                      <Route
                        path="edit/:id"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <TotemsEdit />
                          </Suspense>
                        }
                      />
                      <Route
                        path="pairing"
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <TotemsPairing />
                          </Suspense>
                        }
                      />
                    </Route>

                    <Route path="profile">
                      <Route
                        index
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Profile />
                          </Suspense>
                        }
                      />
                    </Route>

                    <Route path="pairing">
                      <Route
                        index
                        element={
                          <Suspense fallback={<div>Carregando...</div>}>
                            <Pairing />
                          </Suspense>
                        }
                      />
                    </Route>
                  </Route>
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
          </BrowserRouter>
        </TooltipProvider>

        <ToastContainer closeOnClick />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
