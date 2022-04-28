import React from "react";
import ImageWrap from "../ImageWrap/index";
import Tab from "../Tab";

export default function AccountLayout({ children }) {
    // let initTab = 0;
    // if (typeof window !== "undefined") {
    //     initTab = localStorage.getItem("tab_active");
    // }
    // const [tabActive, setTabActive] = useState(0);
    // const handleChangeTab = (i) => (ev) => {
    //     ev.preventDefault();
    //     setTabActive(i);
    //     // localStorage.setItem("tab_active", tabActive);
    // };

    return (
        <>
            <div className="Account">
                <div className="container-fluid flexSB">
                    <div className="w30">
                        <div className="SideBar">
                            <div className="flexCOL flexAC">
                                <div className="SideBar__avt">
                                    <ImageWrap src="/images/user.png" gif="/images/gif/135x135.gif" bora={"50%"} />
                                </div>
                                <div className="SideBar__name txMain blue bold fz-16">Welcome, DatPhan</div>
                                <div className="SideBar__email txMain purple normal fz-16">datphan@abc.com</div>
                            </div>
                            <div className="SideBar__statistic flexSB w100">
                                <div className="w50">
                                    <div className="SideBar__statistic-value txMain purple fz-30">04</div>
                                    <div className="SideBar__statistic-title txMain upc purple thin">upcoming show</div>
                                </div>
                                <div className="w50">
                                    <div className="SideBar__statistic-value txMain purple fz-30">21</div>
                                    <div className="SideBar__statistic-title txMain upc purple thin">Purchase history</div>
                                </div>
                            </div>
                            <ul className="SideBar__tab">
                                <Tab href="/account/DatPhan/information" title="Personal information" />
                                <Tab href="/account/DatPhan/purchasehistory" title="Purchase history" />
                                <Tab href="#" title="Change password" />
                                <Tab href="/account/DatPhan/payment" title="Payment methods" />
                                <Tab href="#" title="Log out" />
                            </ul>
                        </div>
                    </div>
                    <div className="w70">{children}</div>
                </div>
            </div>
            <style jsx>{`
                .Account {
                    padding: {
                        top: 200px;
                        bottom: 70px;
                    }
                    .container-fluid {
                        gap: 85px;
                        align-items: flex-start;
                    }
                }
                ul {
                    width: 100%;
                    height: 100%;
                }
                .SideBar {
                    background-color: #060270;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    border-radius: 15px;
                    padding-top: 40px;
                    &__avt {
                        position: relative;
                        z-index: 1;
                        margin-bottom: 24px;
                        &:before {
                            position: absolute;
                            content: "";
                            background-color: #e71882;
                            width: 107%;
                            height: 107%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            z-index: -1;
                            border-radius: 50%;
                        }
                    }
                    &__email {
                        margin-bottom: 24px;
                    }
                    &__statistic {
                        padding-inline: 46px;
                        margin-bottom: 50px;
                        &-value {
                            margin-bottom: 13px;
                        }
                    }
                }
            `}</style>
        </>
    );
}
