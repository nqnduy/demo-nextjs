function Image({ width, height, auto, ...props }) {
    return (
        <>
            <div className={`Image ${auto}`}>
                <img {...props} />
            </div>
            <style jsx>{`
                div {
                    position: relative;
                    width: ${width};
                    height: ${height};
                    overflow: hidden;
                    img {
                        min-height: 100%;
                        min-width: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        object-fit: cover;
                    }
                    &.height {
                        height: auto;
                        width: ${width};
                    }
                    &.width {
                        width: auto;
                        height: ${height};
                    }
                }
            `}</style>
        </>
    );
}

export default Image;
