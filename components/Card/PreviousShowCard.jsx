function PreviousShowCard({ image, title, event, children }) {
    return (
        <>
            <div className="PreviousShowCard">
                <div className="PreviousShowCard-content">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div className="layer"></div>
                    <div className="textWrap flexSB">
                        <div>
                            <p className="txMain">{title}</p>
                            <p className="txMain normal purple">{event} events</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .PreviousShowCard {
                    margin-right: 26px;
                    &-content {
                        position: relative;
                        .img {
                            position: relative;
                            width: 100%;
                            height: 370px;
                            border-radius: 15px;
                            overflow: hidden;
                            img {
                                position: absolute;
                                min-width: 100%;
                                min-height: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                object-fit: cover;
                            }
                        }
                        .layer {
                            position: absolute;
                            bottom: 0;
                            z-index: 2;
                            left: 0;
                            width: 100%;
                            height: 30%;
                            background: linear-gradient(180deg, rgba(17, 12, 99, 0) 0%, rgba(17, 12, 99, 0.5) 58.85%, rgba(17, 12, 99, 0.85) 100%);
                        }
                        .textWrap {
                            position: absolute;
                            z-index: 3;
                            width: 100%;
                            padding: 0 20px;
                            color: #fff;
                            bottom: 18px;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default PreviousShowCard;
