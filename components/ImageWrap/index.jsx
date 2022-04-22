import React from "react";

export default function ImageWrap({ src, gif, bora = 0, ...props }) {
    return (
        <>
            <style jsx global>{`
                .ImageWrap {
                    position: relative;
                    overflow: hidden;
                    border-radius: ${bora}px;
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
                }
            `}</style>

            <div className="ImageWrap">
                <div style={{ background: `url(${src}) no-repeat center` }}></div>
                <img src={gif} {...props} />
            </div>
        </>
    );
}
