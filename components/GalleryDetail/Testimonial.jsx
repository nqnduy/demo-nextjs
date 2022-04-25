import React from "react";
import Slider from "react-slick";
import ArrowNext from "../ArrowNext";
import ArrowPrev from "../ArrowPrev";
import TestimonialCard from "../Card/TestimonialCard";
import TextTitle from "../TextTitle";

export default function Testimonial() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="w50">
                    <TextTitle small_text="TESTIMONIALS" big_text="Take a look at our past customers success stories" />
                </div>
                <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider>
            </div>
            <style jsx global>{`
                .slick-slide .TestimonialCard {
                    margin: 0 13px;
                }
            `}</style>
        </div>
    );
}
