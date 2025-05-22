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
            }
        ],
        errorElement: <ErrorPage />
    },
]);


export default router;
