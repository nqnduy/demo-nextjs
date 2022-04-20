function Button({ children, width, color }) {
    return (
        <>
            <button className={`Button ${width} ${color}`}>
                <p>{children}</p>
            </button>
            <style jsx>{`
                .Button {
                    position: relative;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    border-radius: 15px;
                    padding: 0;
                    margin: 0;
                    width: max-content;
                    p {
                        background-color: #e71882;
                        font-size: 16px;
                        padding: 14px 28px 17px 28px;
                        border-radius: 15px;
                        font-family: fm-b;
                        color: #fff;
                        position: relative;
                        z-index: 3;
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        z-index: 1;
                        width: 98%;
                        height: 100%;
                        border-radius: 15px;
                        border: 1px solid #20ade4;
                        bottom: -6px;
                        left: 1px;
                    }
                    &.fullWidth {
                        width: 100%;
                    }
                    &.white {
                        p {
                            background-color: #fff;
                            color: #060070;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Button;
