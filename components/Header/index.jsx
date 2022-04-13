// import React from "react";
import Image from "next/image";
import HeaderCTA from "./CTA";
function Header() {
    return (
        <>
            <HeaderCTA />
            <div className="Header">
                <div className="container-fluid">
                    <div className="logo">
                        <Image src="/icons/logo.svg" alt="Logo" width={107} height={40} />
                    </div>
                    <ul className="menu">
                        <li className="txMain bold">
                            <a href="">About Us</a>
                        </li>
                        <li className="txMain bold">
                            <a href="">Upcoming Shows</a>
                        </li>
                        <li className="txMain bold">
                            <a href="">Gallery</a>
                        </li>
                        <li className="txMain bold">
                            <a href="">News & Promotions</a>
                        </li>
                        <li className="txMain bold">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <div className="action">
                        <div className="action-search">
                            <Image src="/icons/search.svg" alt="search-icon" width={20} height={20} />
                        </div>
                        <div className="action-user">
                            <Image src="/icons/user.svg" alt="user-icon" width={16} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .Header {
                    position: fixed;
                    margin-top: 50px;
                    z-index: 2;
                    height: 80px;
                    width: 100%;
                    .container-fluid {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                    }
                    .menu {
                        display: flex;
                        align-items: center;
                        gap: 40px;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%);
                        li {
                            font-size: 16px;
                            line-height: 16px;
                        }
                    }
                    .action {
                        display: flex;
                        align-items: center;
                        gap: 30px;
                        &-search {
                            cursor: pointer;
                        }
                        &-user {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            cursor: pointer;
                            background-color: rgba(255, 255, 255, 0.07);
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Header;
