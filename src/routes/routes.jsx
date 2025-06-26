import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword";
import ShareGardenTip from "../pages/ShareGardenTip";
import ProtectedRoute from "./ProtectedRoute";
import BrowseTipsPage from "../pages/BrowsTipsPage";
import ExploreGardeners from "../pages/ExploreGardeners";
import TipDetails from "../pages/TipDetails";
import MyTips from "../pages/MyTips";
import UpdateTip from "../pages/UpdateTip";
import Dashboard from "../pages/Dashboard";
import AllTips from "../pages/AllTips";
import DashboardMyTips from "../pages/DashboardMyTips";
import DashboardAddTip from "../pages/DashboardAddTip";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "auth",
                Component: AuthLayout,
                children: [
                    { path: "login", Component: Login },
                    { path: "signup", Component: Signup },
                    { path: "reset", Component: ForgetPassword },
                ],
            },
            {
                path: "/share-garden-tip",
                element: <ProtectedRoute><ShareGardenTip /></ProtectedRoute>,
            },
            {
                path: '/browse-tips',
                Component: BrowseTipsPage
            },
            {
                path: "/explore-gardeners",
                Component: ExploreGardeners
            },
            {
                path: "/tips/:id",
                element: <ProtectedRoute><TipDetails /></ProtectedRoute>
            },
            {
                path: '/my-tips',
                element: <ProtectedRoute><MyTips /></ProtectedRoute>
            },
            {
                path: "/update-tip/:id",
                element: <ProtectedRoute><UpdateTip /></ProtectedRoute>
            },
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "all-tips",
                element: <AllTips />
            },
            {
                path: "my-tips",
                element: <DashboardMyTips />
            },
            {
                path: "add-tip",
                element: <DashboardAddTip />
            }
        ]
    }
]);


export default router;
