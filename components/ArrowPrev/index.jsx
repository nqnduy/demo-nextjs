import React from "react";
export default function ArrowPrev({ ...props }) {
    return (
        <>
            <div className="btn prev" {...props}>
                <img src="/images/icons/arrow-prev.svg" alt="" />
            </div>
            <style jsx>{`
                .btn {
                }
            `}</style>
        </>
    );
}
