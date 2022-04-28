import React from "react";
import Button from "../Button";
import Input from "../Input";

export default function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="flexCT flexCOL" style={{ textAlign: "center", width: "40vw", margin: "0 auto", gap: 20 }}>
                    <p className="txMain bold fz-36">Get in touch</p>
                    <p className="txMain blue normal upc lspacing-1" style={{ marginBottom: 30 }}>
                        If you have any questions, feel Free Contact With Us!
                    </p>
                    <Input type="text" placeholder="Enter your name here..." />
                    <Input type="text" placeholder="Email address..." />
                    <Input.TextArea type="text" placeholder="Your message..." rows="3" />
                    <Button>Search now</Button>
                </div>
            </div>
            <style jsx>{`
                .Contact {
                    padding: {
                        top: 200px;
                        bottom: 70px;
                    }
                }
            `}</style>
        </>
    );
}
