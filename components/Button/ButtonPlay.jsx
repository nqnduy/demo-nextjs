import React from "react";

export default function ButtonPlay() {
    return (
        <>
            <div className="iconPlay">
                <img src="/images/icons/play.svg" alt="" />
            </div>
            <style jsx>{`
                .iconPlay {
                    transition: 0.3s;
                    &:hover {
                        transform: scale(1.1);
                        transition: 0.3s;
                        cursor: pointer;
                    }
                }
            `}</style>
        </>
    );
}
