import React from "react";
import Accordion from "./index";
function AccordionList() {
    return (
        <div className="AccordionList">
            <Accordion
                title="1. Where does it come from?"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <Accordion
                title="2. What is Lorem Ipsum?"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <Accordion
                title="3. Where can I get some?"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <Accordion
                title="4. The standard Lorem Ipsum passage?"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <Accordion
                title="5. Section 1.10.33 of de Finibus Bonorum?"
                content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <style jsx global>{`
                .AccordionList {
                    display: flex;
                    flex-direction: column;
                }
                .Accordion {
                    &:first-child {
                        padding-top: 0;
                    }
                    &:last-child {
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default AccordionList;
