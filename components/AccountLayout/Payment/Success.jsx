import React from "react";
import Button from "../../Button";
import TextTitle from "../../TextTitle";

export default function Success({ transfer = true }) {
    return (
        <>
            <div className="SuccessPage">
                <div className="SuccessPage__detail flexCOL flexAC">
                    <div className="SuccessPage__detail-info">
                        <TextTitle small_text="get ticket" big_text="Completed" />
                        <p className="txMain purple normal fz-16" style={{ marginBottom: 27 }}>
                            Thank you for reorder ticket. Please check QRcode below:
                        </p>
                        <div className="SuccessPage__detail-info--text">
                            <div className="textWrap">
                                <p className="txMain bold w20">Category</p>
                                <p className="txMain normal">Liveshow</p>
                            </div>
                            <div className="textWrap">
                                <p className="txMain bold w20">Date & time</p>
                                <div className="txMain normal">
                                    <p>Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                                    <p className="flexAC" style={{ textAlign: "center", gap: 10 }}>
                                        <img src="/images/icons/clock.svg" alt="" /> Event will start in{" "}
                                        <span className="txMain blue bold">00 : 03 : 27 : 49</span>
                                    </p>
                                </div>
                            </div>
                            <div className="textWrap">
                                <p className="txMain bold w20">Location</p>
                                <p className="txMain normal flexCOL w55">
                                    Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                                    <span className="txMain hoverText hoverText-blue hoverText-small">View map</span>
                                </p>
                            </div>
                        </div>
                        {transfer ? (
                            <div className="flexAC" style={{ gap: 35 }}>
                                <div className="QRCode">
                                    <img src="/images/QRcode.png" alt="" />
                                </div>
                                <div className="flexCOL" style={{ gap: 20 }}>
                                    <Button>Save ticket to profile</Button>
                                    <Button>Save ticket to device</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="btnCompleted">
                                <Button>Completed</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .SuccessPage {
                    padding: 200px 0 70px;
                    padding-inline: 200px;
                    &__detail {
                        position: relative;
                        margin: 0 auto;
                        width: 60vw;
                        padding: 30px 0;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        background: url(/images/payment-success.png) no-repeat center center/cover;
                        &-info {
                            margin-left: auto;
                            &--text {
                                margin-bottom: 30px;
                                .textWrap {
                                    display: flex;
                                    align-items: flex-start;
                                }
                                p {
                                    margin-bottom: 25px;
                                }
                            }
                            .btnCompleted {
                                margin-bottom: 50px;
                            }
                        }
                    }
                }
                .QRCode {
                    width: 130px;
                    height: auto;
                }
            `}</style>
        </>
    );
}
