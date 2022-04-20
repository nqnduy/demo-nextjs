import Image from "next/image";
import Input from "./Input";
function Footer() {
    return (
        <>
            <footer className="Footer" style={{ backgroundColor: "#060070" }}>
                <div className="container-fluid">
                    <div className="backBannerFooter">
                        <div style={{ width: "53%" }}>
                            <p className="txMain bold large" style={{ marginBottom: 6 }}>
                                Sign up to our newsletter
                            </p>
                            <p className="txMain normal content">Don’t miss our future updates!</p>
                        </div>
                        <div style={{ width: "48%" }}>
                            <Input />
                        </div>
                    </div>
                    <div className="Footer__navigate flexSB">
                        <div className="logo">
                            <Image src="/images/icons/logo.svg" alt="Logo" width={107} height={40} />
                        </div>
                        <ul className="menu flex" style={{ gap: 40 }}>
                            <li className="txMain normal content">
                                <a href="">About Us</a>
                            </li>
                            <li className="txMain normal content">
                                <a href="">Upcoming Shows</a>
                            </li>
                            <li className="txMain normal content">
                                <a href="">Gallery</a>
                            </li>
                            <li className="txMain normal content">
                                <a href="">News & Promotions</a>
                            </li>
                            <li className="txMain normal content">
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer__bottom flexSB">
                        <p className="txMain purple normal">©2022 Top Live Show. All rights reserved.</p>
                        <div className="flexAC" style={{ gap: 25 }}>
                            <div className="icon facebook">
                                <Image src="/images/icons/facebook.svg" alt="Facebook" width={10} height={18} />
                            </div>
                            <div className="icon tiktok">
                                <Image src="/images/icons/tiktok.svg" alt="Tiktok" width={15} height={18} />
                            </div>
                            <div className="icon youtube">
                                <Image src="/images/icons/youtube.svg" alt="Youtube" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                .backBannerFooter {
                    background: url(/images/footer.png) no-repeat center center/cover;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 68px 86px;
                }
                .Footer {
                    padding-top: 30px;
                    &__navigate {
                        margin-top: 45px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        margin-bottom: 30px;
                        padding-bottom: 35px;
                        .menu {
                            li {
                                cursor: pointer;
                                a {
                                    color: #b8b7d0;
                                    transition: ease 0.3s;
                                }
                                &:hover {
                                    a {
                                        color: #fff;
                                        transition: ease 0.3s;
                                    }
                                }
                            }
                        }
                    }
                    &__bottom {
                        padding-bottom: 30px;
                        .icon {
                            cursor: pointer;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Footer;
