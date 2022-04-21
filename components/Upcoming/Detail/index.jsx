import React from "react";
import Upcoming from "..";
import SocialGroup from "../../Header/SocialGroup";
import BrandGroup from "../../OurClient/BrandGroup";
import GetTicket from "./GetTicket";
import Ticket from "./Ticket";
export default function Detail() {
    return (
        <div className="UpComingShowDetail">
            <div className="container-fluid" style={{ marginBottom: 80 }}>
                <div className="flex" style={{ gap: 85, justifyContent: "space-between" }}>
                    <div className="w50" style={{ paddingBottom: 40, marginBottom: 20, borderBottom: "1px solid rgba(255, 255, 255, 0.07);" }}>
                        <h2 className="txMain fz-36 bold" style={{ marginBottom: 40 }}>
                            France Rock Music Conference March 2022
                        </h2>
                        <div className="txMain purple normal fz-16">
                            <p className="txMain blue bold">About this event</p>
                            <br />
                            Rock en Seine is one of France's most famous music festivals, held over three days in late summer each year in the country's capital
                            Paris. <br />
                            <br />
                            Taking over the historic Domaine National de Saint-Cloud’s beautiful parkland, Rock en Seine brings together a lineup of
                            international stars and newcomers from the worlds of indie, alternative, pop, hip-hop, and electronic music. <br />
                            <br /> For the eagerly anticipated next instalment – the first edition since the end of summer 2019 – Rock en Seine have pulled out
                            all the stops with the likes of Tame Impala, Nick Cave & The Bad Seeds, Jamie xx, Stromae, Kraftwerk, and FKJ among those giving a
                            sense of the festival's musical diversity that plays out within touching distance of Paris' thriving city centre. <br />
                            <br /> If you have any questions, please contact with us at help@topliveshow.com
                            <br />
                            <br />
                            <br />
                            <p className="txMain blue bold">Ticket price of the event</p>
                            <br />
                            Pellentesque massa erat adipiscing lorem molestie amet augue. Lorem ipsum amet vitae ipsum at a sagittis cras arcu interdum
                        </div>
                        <div className="flex" style={{ justifyContent: "space-between", marginBlock: 30 }}>
                            <Ticket title="Economy ticket" price="0.99" ticket="49">
                                <p>Entrance card </p>
                                <p>Drinking water</p>
                                <p>-</p>
                            </Ticket>
                            <Ticket title="Standard ticket" price="0.99">
                                <p>Entrance card Silk Bag</p>
                                <p>Drinks and fresh fruit</p>
                                <p>Silk Bag</p>
                            </Ticket>
                            <Ticket title="Vip ticket" price="39.50" ticket="7">
                                <p>Entrance card Silk Bag</p>
                                <p>Drinks and fresh fruit</p>
                                <p>Combo Gift</p>
                            </Ticket>
                        </div>
                        <div className="txMain normal purple">
                            <p className="txMain blue bold fz-21">Sponsors of event</p>
                            <br />
                            <br />
                            <BrandGroup column={4} />
                            <br />
                            <br />
                            <p className="txMain blue bold fz-21">Very important to note</p>
                            <br />
                            import SocialGroup from '../../Header/SocialGroup';
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl diam phasellus lacus id orci viverra duis in. Suspendisse
                            tellus imperdiet felis, tempor tristique duis. Pellentesque massa erat adipiscing lorem molestie amet augue. Vitae ipsum at a
                            sagittis cras arcu interdum. Quam etiam.
                            <br />
                            <br />
                            Magna proin ultrices sagittis, nam in dignissim proin et, eu. Lacus, tristique metus ut amet morbi eu placerat dui, orci.
                            <br /> <br />
                            <ul className="list-style-auto" style={{ marginLeft: 15 }}>
                                <li>Dolor, nulla pellentesque felis ultricies.</li>
                                <li>Amet, massa elementum ornare gravida nunc nec.</li>
                                <li>Adipiscing ipsum sit fermentum sapien at dictumst.</li>
                                <li>Nibh ut nunc, est arcu mollis blandit egestas eget ante.</li>
                                <li>Venenatis ultrices integer risus quis aliquam sagittis consectetur.</li>
                            </ul>
                            <br />
                            <br />
                            Tellus commodo mauris sem id vulputate eget pellentesque a. Montes, bibendum rhoncus dignissim amet, orci. Vitae cras proin lacinia
                            iaculis turpis sed dolor ac lacus. Amet, pellentesque diam leo aliquam a proin volutpat.
                        </div>
                    </div>
                    <div style={{ width: "30%" }}>
                        <GetTicket />
                    </div>
                </div>
                <div className="flex" style={{ gap: 38 }}>
                    <p className="txMain purple">Share on</p>
                    <SocialGroup />
                </div>
            </div>
            <p className=" PLMain txMain bold fz-21">Looking for an upcoming show? You can explore by categories, location, and date start... Ready?</p>
            <Upcoming haveTitle={false} pTop={50} />

            <style jsx global>{`
                .Ticket {
                    width: calc((100% / 3) - (40px / 3));
                }
            `}</style>
        </div>
    );
}
