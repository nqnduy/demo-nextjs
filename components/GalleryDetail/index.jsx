import React from "react";
import Banner from "./Banner";
import MomentList from "./MomentList";
import Testimonial from "./Testimonial";

export default function GalleryDetail() {
    return (
        <>
            <div className="GalleryDetail">
                <Banner />
                <MomentList />
                <Testimonial />
            </div>
        </>
    );
}
