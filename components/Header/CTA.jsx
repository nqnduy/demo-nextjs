import Image from "next/image";
function HeaderCTA() {
    return (
        <>
            <div className="HeaderCTA">
                <div className="container-fluid">
                    <div className="HeaderCTA-title txMain upc">
                        Have any Questions? Call Us <strong>028 6673 8686</strong>
                    </div>
                    <div className="HeaderCTA-button">
                        <div>
                            <div className="HeaderCTA-button__item facebook">
                                <Image src="/icons/facebook.svg" alt="Facebook" width={10} height={18} />
                            </div>
                            <div className="HeaderCTA-button__item tiktok">
                                <Image src="/icons/tiktok.svg" alt="Tiktok" width={15} height={18} />
                            </div>
                            <div className="HeaderCTA-button__item youtube">
                                <Image src="/icons/youtube.svg" alt="Youtube" width={20} height={14} />
                            </div>
                        </div>
                        <div className="language">
                            <div className="language-current">
                                English
                                <Image src="/icons/lang-arrow.svg" alt="lang-arrow" width={9.5} height={5.5} />
                            </div>
                            <div className="language-select hide">Việt Nam</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                $purple-cl: #b8b7d0;
                .HeaderCTA {
                    position: fixed;
                    width: 100%;
                    display: flex;
                    height: 50px;
                    align-items: center;
                    background-color: #060070;
                    .container-fluid {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                    }
                    &-title {
                        font-size: 14px;
                        text-transform: uppercase;
                        color: $purple-cl;

                        strong {
                            color: white;
                        }
                    }
                    &-button {
                        display: flex;
                        align-items: center;
                        gap: 40px;
                        & > div {
                            display: flex;
                            align-items: center;
                            gap: 25px;
                        }
                        .language {
                            position: relative;
                            height: 100%;
                            color: #fff;
                            font-size: 14px;
                            color: $purple-cl;
                            font-weight: 500;
                            line-height: 19px;
                            &-current {
                                display: flex;
                                align-items: center;
                                gap: 6px;
                            }
                            &-select {
                                position: absolute;
                                display: flex;
                                width: max-content;
                                flex-direction: column;
                                top: 35px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default HeaderCTA;
