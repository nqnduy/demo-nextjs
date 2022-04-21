import React, { useState } from "react";

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`Accordion flexSB ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <div className="txMain title">{title}</div>
                    <div className="txMain purple normal fz-16 content">{content}</div>
                </div>
                <div>
                    <div className="icon">
                        <div className="y"></div>
                        <div className="x"></div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .Accordion {
                    column-gap: 45px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
                    padding: 35px 0 24px 0;
                    transition: 0.4s ease-out;
                    .title {
                        font-size: 21px;
                        color: #b8b7d0;
                        cursor: pointer;
                    }
                    .fz-16 {
                        margin-top: 13px;
                        opacity: 0;
                        max-height: 0;
                        transition: 0.4s ease-out;
                    }
                    .icon {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        border-radius: 50%;
                        cursor: pointer;
                        transition: 0.2s ease-out;
                        .y {
                            opacity: 1;
                            position: absolute;
                            height: 13px;
                            width: 1px;
                            background-color: rgba(255, 255, 255, 0.5);
                            border-radius: 3px;
                            transition: 0.2s ease-out;
                        }
                        .x {
                            position: absolute;
                            width: 13px;
                            height: 1px;
                            background-color: rgba(255, 255, 255, 0.5);
                            border-radius: 3px;
                            transition: 0.2s ease-out;
                        }
                    }
                    &.open {
                        transition: 0.4s ease-out;
                        .content {
                            opacity: 1;
                            height: auto;
                            max-height: 500px;
                            transition: 0.4s ease-out;
                        }
                        .icon {
                            background-color: #e71882;
                            border-color: #e71882;
                            transition: 0.2s ease-out;
                            .y {
                                opacity: 0;
                                transition: 0.2s ease-out;
                            }
                            .x,
                            .y {
                                background-color: #fff;
                                transition: 0.2s ease-out;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Accordion;
