import React from "react";
import Button from "../../Button";
import ShowPost from "./ShowPost";

export default function TicketDetail({ show }) {
    return (
        <>
            <div className={`TicketDetail ${show}`}>
                <div className="TicketDetail__info txMain fz-16 flex">
                    <div className="w70">
                        <div className="textWrap">
                            <p className="txMain bold w20">Price</p>
                            <p className="txMain normal">Start at $0.99 - $39.50</p>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w20">Category</p>
                            <p className="txMain normal">Liveshow</p>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w20">Date & time</p>
                            <div className="txMain normal">
                                <p>Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                                <p className="flexAC" style={{ textAlign: "center", gap: 10 }}>
                                    <img src="/images/icons/clock.svg" alt="" /> Event will start in <span className="txMain blue bold">00 : 03 : 27 : 49</span>
                                </p>
                            </div>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w20">Location</p>
                            <p className="txMain normal flexCOL">
                                Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                                <span className="txMain hoverText hoverText-blue hoverText-small">View map</span>
                            </p>
                        </div>
                    </div>
                    <div className="flexCOL flexAC" style={{ width: "23%" }}>
                        <div className="QRCode">
                            <img src="/images/QRcode.png" alt="" />
                        </div>
                        <Button>Save ticket to device</Button>
                    </div>
                </div>
                <ShowPost />
            </div>
            <style jsx>{`
                .TicketDetail {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    &__info {
                        padding: 32px 30px;
                        background-color: #060270;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        justify-content: space-between;
                        .textWrap {
                            display: flex;
                            align-items: flex-start;
                        }
                    }
                }
                .QRCode {
                    width: 100%;
                    height: auto;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    );
}
