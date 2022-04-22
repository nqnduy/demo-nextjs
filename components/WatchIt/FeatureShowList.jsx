import Slider from "react-slick";
import ArrowNext from "../ArrowNext";
import ArrowPrev from "../ArrowPrev";
import Button from "../Button";
import PreviousShowCard from "../Card/PreviousShowCard";
import TextTitle from "../TextTitle";

export default function FeatureShowList() {
    const settings = {
        className: "center",
        centerPadding: "100px",
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <>
            <div className="FeatureShowList">
                <div className="container-fluid flexSB">
                    <TextTitle small_text="Watch it again" big_text="Feature shows" />
                </div>
                <div className="container-fluid">
                    <Slider className="PreviousShowList PLMain" {...settings}>
                        <PreviousShowCard image="/images/prv1.png" title="Live show" event="2">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv2.png" title="Conference" event="7">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Fashion show" event="4">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>{" "}
                        <PreviousShowCard image="/images/prv2.png" title="Caremony" event="0">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .FeatureShowList {
                    padding-top: 200px;
                }
                .slick-arrow {
                    top: -60px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                .showCard {
                    margin-right: 26px;
                }
            `}</style>
        </>
    );
}
