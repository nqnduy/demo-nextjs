import React from "react";

function NextPrev({ onClickPrev, onClickNext }) {
    return (
        <>
            <div className="flexAC">
                <div className="btn prev" onClick={onClickPrev}>
                    <img src="/images/icons/arrow-next.svg" alt="" />
                </div>
                <div className="btn next" onClick={onClickNext}>
                    <img src="/images/icons/arrow-next.svg" alt="" />
                </div>
            </div>

            <style jsx>{`
                .flexAC {
                    gap: 16px;
                }
                .btn {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                    transition: 0.4s ease;
                    img {
                        position: absolute;
                        min-width: 100%;
                        min-height: 100%;
                        top: 50%;
                        left: 50%;
                        filter: brightness(0.5);
                        transform: translate(-50%, -50%);
                        transition: 0.4s ease;
                    }
                    &:hover {
                        transition: 0.4s ease;
                        background-color: rgba(255, 255, 255, 0.3);
                        img {
                            filter: initial;
                            transition: 0.3s;
                        }
                    }
                    &.prev {
                        transform: rotate(180deg);
                    }
                }
            `}</style>
        </>
    );
}

export default NextPrev;
