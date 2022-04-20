import TextTitle from "../TextTitle/index";
import NewCard from "./NewCard";
function WhatNew() {
    return (
        <>
            <div className="WhatNew">
                <div style={{ textAlign: "center", marginBottom: 50 }}>
                    <TextTitle small_text="what news?" big_text="News and promotions" />
                </div>
                <div className="NewGrid container-fluid flex" style={{ gap: 40, margin: "0 auto", justifyContent: "space-between" }}>
                    <div style={{ width: "45%", height: "100%" }}>
                        <NewCard
                            image="/images/new1.png"
                            category="News"
                            time="Feb 27, 2022"
                            title="Distract by the readable content of a page"
                            content="Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s"
                        />
                    </div>
                    <div style={{ width: "23%", flexGrow: 1 }}>
                        <div className="flexCOL" style={{ height: "100%" }}>
                            <div>
                                <NewCard
                                    image="/images/new2.png"
                                    column="center"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="The point of using Lorem Ipsum is that it has a more-or"
                                />
                            </div>
                            <div>
                                <NewCard
                                    image="/images/new3.png"
                                    column="center"
                                    category="News"
                                    time="Feb 27, 2022"
                                    title="The point of using Lorem Ipsum is that it has a more-or"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "27%", flexGrow: 1 }}>
                        <div className="flexCOL" style={{ height: "100%" }}>
                            <div>
                                <NewCard
                                    image="/images/new4.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="The majority have suffered alteration in some form, by injected humour"
                                />
                            </div>
                            <div>
                                <NewCard
                                    image="/images/new5.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="Many desktop publishing packages"
                                />
                            </div>
                            <div>
                                <NewCard
                                    image="/images/new6.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="Various versions have evolved over the years, sometimes by accident"
                                />
                            </div>
                            <div>
                                <NewCard
                                    image="/images/new7.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="There are many variations of passages of Lorem"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flexCT" style={{ marginTop: 40 }}>
                    <p className="txMain pink bold hoverPink hoverPink-small">View More</p>
                </div>
                <style jsx>{`
                    .flexCOL {
                        justify-content: space-between;
                    }
                `}</style>
            </div>
        </>
    );
}

export default WhatNew;
