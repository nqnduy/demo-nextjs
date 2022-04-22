import React from "react";
function Organizational() {
    return (
        <div className="container-fluid" style={{ marginBlock: 80 }}>
            <div style={{ padding: "36px 55px", backgroundColor: "#060070", boxShadow: "3px 23px 133px rgba(0, 0, 0, 0.2)", borderRadius: 15 }}>
                <h3 className="txMain blue normal upc" style={{ textAlign: "center", marginBottom: 30 }}>
                    Organizational units
                </h3>
                <div className="flexSB">
                    <img src="/images/icons/snapit.svg" alt="" />
                    <img src="/images/icons/digitop.svg" alt="" />
                    <img src="/images/icons/topgroup.svg" alt="" />
                    <img src="/images/icons/tops.svg" alt="" />
                    <img src="/images/icons/topevent.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Organizational;
