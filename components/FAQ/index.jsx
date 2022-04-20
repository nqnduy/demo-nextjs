import React from "react";
import TextTitle from "../TextTitle";
import AccordionList from "./Accordion/AccordionList";
function FAQ() {
    return (
        <div className="FAQ">
            <div className="container-fluid flex">
                <div style={{ width: "43%" }}>
                    <TextTitle small_text="support on Faqs" big_text="Awesome to know" />
                    <p className="txMain purple normal" style={{ marginBottom: 40, width: "75%" }}>
                        When an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <p className="txMain bold headline hoverText hoverText-pink">Frequently asked questions</p>
                    <p className="txMain bold headline hoverText hoverText-pink">Payment and returns</p>
                    <p className="txMain bold headline hoverText hoverText-pink">Managing your account</p>
                    <p className="txMain normal purple" style={{ marginBottom: 10 }}>
                        Still have any questions for your problem?{" "}
                    </p>
                    <p className="txMain bold hoverText hoverText-pink hoverText-small">Request Now!</p>
                </div>
                <div style={{ width: "57%" }}>
                    <AccordionList />
                </div>
            </div>
            <style jsx>{`
                .container-fluid {
                    gap: 100px;
                    .headline {
                        font-size: 18px;
                        line-height: 18px;
                        margin-bottom: 35px;
                    }
                }
            `}</style>
        </div>
    );
}

export default FAQ;
<></>;
