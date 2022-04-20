import TextTitle from "../TextTitle";

function Aboutus() {
    return (
        <div className="AboutUs">
            <div className="container-fluid flexSB">
                <div style={{ width: "40%" }}>
                    <TextTitle small_text="About us" big_text="We always bring uniqueness to our customers" />
                    <p className="txMain normal purple" style={{ width: "95%", textAlign: "justify" }}>
                        The Event Company is an event design and production company that specializes in corporate and social events as well as lorem set
                        ametaque non-profit lorem fundraisers.
                        <br />
                        <br /> Sed ut perspiciatis, unde omnis iste natus error voluptatem accusantium doloremque laudantium lorem explicabo.
                    </p>
                    <div className="statistic flex">
                        <div>
                            <div className="value txMain purple upc">250+</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Recent Events</div>
                        </div>
                        <div>
                            <div className="value txMain purple upc">50+</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Happy Clients</div>
                        </div>
                        <div>
                            <div className="value txMain purple upc">35.8K</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Tickets Sold</div>
                        </div>
                    </div>
                    <p className="txMain bold hoverPink hoverPink-small">View more</p>
                </div>
                <div className="flex" style={{ gap: 30 }}>
                    <div className="flex" style={{ flexDirection: "column", alignItems: "flex-end" }}>
                        <div className="img img1">
                            <img src="/images/aboutus1.png" alt="" />
                        </div>
                        <div className="img img2">
                            <img src="/images/aboutus2.png" alt="" />
                        </div>
                    </div>
                    <div className="img img3">
                        <img src="/images/aboutus3.png" alt="" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .statistic {
                    margin-block: 36px;
                    gap: 87px;
                    .value {
                        font-size: 30px;
                        margin-bottom: 13px;
                    }
                }
                .img {
                    position: relative;
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
                    &.img1 {
                        width: 287px;
                        height: 340px;
                        margin-bottom: 30px;
                    }
                    &.img2 {
                        width: 257px;
                        height: 245px;
                    }
                    &.img3 {
                        width: 284px;
                        height: 450px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Aboutus;
