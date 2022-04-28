import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SocialGroup from "./SocialGroup";
function Header() {
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        if (typeof window != "undefined") {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = (event) => {
        if (window.pageYOffset > 200) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };
    return (
        <header className={fixed ? "active" : ""} onScroll={handleScroll}>
            <div className="HeaderCTA">
                <div className="container-fluid">
                    <div className="HeaderCTA-title txMain upc">
                        Have any Questions? Call Us <strong>028 6673 8686</strong>
                    </div>
                    <div className="HeaderCTA-button">
                        <SocialGroup />
                        <div className="language">
                            <div className="language-current">
                                English
                                <Image src="/images/icons/lang-arrow.svg" alt="lang-arrow" width={9.5} height={5.5} />
                            </div>
                            <div className="language-select hide">Việt Nam</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="HeaderMenu">
                <div className="container-fluid">
                    <div className="logo">
                        <Image src="/images/icons/logo.svg" alt="Logo" width={107} height={40} />
                    </div>
                    <ul className="menu">
                        <li>
                            <Link href="/about-us">
                                <a className="txMain bold hoverText hoverText-pink" href="">
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/upcoming-shows">
                                <a className="txMain bold hoverText hoverText-pink">Upcoming Shows</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery">
                                <a className="txMain bold hoverText hoverText-pink">Gallery</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/newspromotion">
                                <a className="txMain bold hoverText hoverText-pink">News & Promotions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className="txMain bold hoverText hoverText-pink">Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="action">
                        <div className="action-search">
                            <Image src="/images/icons/search.svg" alt="search-icon" width={20} height={20} />
                        </div>
                        <div className="action-user">
                            <Image src="/images/icons/user.svg" alt="user-icon" width={16} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                $purple-cl: #b8b7d0;
                header {
                    @keyframes fadeInOpacity {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    .HeaderCTA {
                        position: fixed;
                        width: 100%;
                        display: flex;
                        z-index: 100;
                        height: 50px;
                        align-items: center;
                        background-color: #060070;
                        .container-fluid {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            height: 100%;
                        }
                        &-title {
                            font-size: 14px;
                            text-transform: uppercase;
                            color: $purple-cl;

                            strong {
                                color: white;
                            }
                        }
                        &-button {
                            display: flex;
                            align-items: center;
                            gap: 40px;
                            .language {
                                position: relative;
                                height: 100%;
                                color: #fff;
                                font-size: 14px;
                                color: $purple-cl;
                                font-weight: 500;
                                line-height: 19px;
                                font-family: fm-m;
                                &-current {
                                    display: flex;
                                    align-items: center;
                                    gap: 6px;
                                }
                                &-select {
                                    position: absolute;
                                    display: flex;
                                    width: max-content;
                                    flex-direction: column;
                                    top: 35px;
                                }
                            }
                        }
                    }
                    .HeaderMenu {
                        position: fixed;
                        margin-top: 50px;
                        z-index: 100;
                        height: 80px;
                        width: 100%;
                        transition: ease-in 0.5s;

                        background-color: transparent;
                        &:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 0;
                            background-color: transparent;
                            pointer-events: none;
                            transition: ease-out 0.5s;
                        }
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
                    &.active {
                        .HeaderCTA {
                            display: none;
                        }
                        .HeaderMenu {
                            margin-top: 0;
                            transition: ease-out 0.45s;
                            &:before {
                                //  transition-delay: 2s;
                                transition: ease-out 0.6s;
                                height: 100%;
                                background-color: #060070;
                                opacity: 1;
                                animation-name: fadeInOpacity;
                                animation-iteration-count: 1;
                                animation-timing-function: ease-in;
                                animation-duration: 1s;
                            }
                        }
                    }
                }
            `}</style>
        </header>
    );
}

export default Header;
