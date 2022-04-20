import React from "react";
import ShowCard from "../ShowCard";
import Sort from "./Sort";
function GridCard() {
    return (
        <>
            <Sort />
            <div className="GridCard container-fluid">
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
                <ShowCard
                    image="/images/card1.png"
                    time="Feb 27, 2022"
                    location="Ho Chi Minh City"
                    title="This is title of liveshow. Max long two line"
                    ticket="25"
                />
                <ShowCard image="/images/card2.png" time="Feb 27, 2022" location="Paris City" title="France Rock Music Conference March 2022" ticket="25" />
                <style jsx global>{`
                    .GridCard {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 26px;
                        position: relative;
                        .SortUpcomingShow {
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default GridCard;
