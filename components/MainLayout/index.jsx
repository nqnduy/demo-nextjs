import React from "react";
import Footer from "../Footer";
import Header from "../Header/index";
function MainLayout({ children, headTitle }) {
    return (
        <div className="mainBody">
            <Header />
            <main style={{ backgroundColor: "#05005E" }}>{children}</main>
            <Footer />
            <style jsx global>{`
                .mainBody {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                main {
                    flex-grow: 1;
                }
            `}</style>
        </div>
    );
}

export default MainLayout;
