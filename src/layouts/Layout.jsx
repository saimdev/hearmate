import { Outlet } from "react-router-dom"
import Header from "@/components/blogs/Header";
import Footer from "@/components/Footer";


const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout