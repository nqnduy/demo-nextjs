import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import PreviousShowCard from "./PreviousShowCard";

function PreviousShowList() {
    return (
        <>
            <div className="PreviousShowList PLMain">
                <Swiper slidesPerView={4.5} freeMode={"true"} spaceBetween={26} style={{ width: "100%" }}>
                    <SwiperSlide>
                        <PreviousShowCard image="/images/prv1.png" title="Live show" event="2">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PreviousShowCard image="/images/prv2.png" title="Conference" event="7">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <PreviousShowCard image="/images/prv3.png" title="Fashion show" event="4">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <PreviousShowCard image="/images/prv2.png" title="Caremony" event="0">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </SwiperSlide>
                </Swiper>
            </div>
            <style jsx>{``}</style>
        </>
    );
}

export default PreviousShowList;
