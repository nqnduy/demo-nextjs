import React from "react";

export default function ImageWrap({ src, gif, bora, ...props }) {
    return (
        <>
            <style jsx global>{`
                .ImageWrap {
                    position: relative;
                    overflow: hidden;
                    div {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-size: cover !important;
                        transition: all 0.4s ease-out;
                    }
                    img {
                        width: 100%;
                    }
                    &.bora15 {
                        border-radius: 15px;
                    }
                }
            `}</style>

            <div className={`ImageWrap ${bora}`}>
                <div style={{ background: `url(${src}) no-repeat center` }}></div>
                <img src={gif} {...props} />
            </div>
        </>
    );
}
