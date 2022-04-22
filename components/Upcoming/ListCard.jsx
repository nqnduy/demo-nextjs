import React from "react";
import Slider from "react-slick";
import ArrowNext from "../ArrowNext";
import ArrowPrev from "../ArrowPrev";
import ShowCard from "../Card/ShowCard";

function ListCard() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <div className="PLMain">
            <Slider {...settings}>
                <ShowCard
                    image="/images/card1.png"
                    time="Feb 27, 2022"
                    location="Ho Chi Minh City"
                    title="This is title of liveshow. Max long two line"
                    ticket="25"
                />
                <ShowCard image="/images/card2.png" time="Feb 27, 2022" location="Paris City" title="France Rock Music Conference March 2022" ticket="25" />
                <ShowCard
                    image="/images/card3.png"
                    time="Mar 10, 2022"
                    location="Ho Chi Minh City"
                    title="Ho Chi Minh City Vietnam Web Submit 2022"
                    ticket="25"
                />
                <ShowCard image="/images/card4.png" time="Mar 10, 2022" location="Ho Chi Minh City" title="Tokyo Digital Conference ShakeUp" ticket="25" />
            </Slider>
            <style jsx global>{`
                .slick-arrow {
                    top: -70px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                .showCard {
                    margin-right: 26px;
                }
            `}</style>
        </div>
    );
}

export default ListCard;
