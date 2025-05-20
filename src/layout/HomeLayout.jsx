import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomeLayout;