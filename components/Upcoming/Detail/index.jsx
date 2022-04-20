import React from "react";
import GetTicket from "./GetTicket";
import Ticket from "./Ticket";

export default function Detail() {
    return (
        <div className="UpComingShowDetail">
            <div className="container-fluid flex" style={{ gap: 85, justifyContent: "space-between" }}>
                <div className="w55">
                    <h2 className="txMain large bold" style={{ marginBottom: 40 }}>
                        France Rock Music Conference March 2022
                    </h2>
                    <div className="txMain purple normal content">
                        <p className="txMain blue bold">About this event</p>
                        <br />
                        Rock en Seine is one of France's most famous music festivals, held over three days in late summer each year in the country's capital
                        Paris. <br />
                        <br />
                        Taking over the historic Domaine National de Saint-Cloud’s beautiful parkland, Rock en Seine brings together a lineup of international
                        stars and newcomers from the worlds of indie, alternative, pop, hip-hop, and electronic music. <br />
                        <br /> For the eagerly anticipated next instalment – the first edition since the end of summer 2019 – Rock en Seine have pulled out all
                        the stops with the likes of Tame Impala, Nick Cave & The Bad Seeds, Jamie xx, Stromae, Kraftwerk, and FKJ among those giving a sense of
                        the festival's musical diversity that plays out within touching distance of Paris' thriving city centre. <br />
                        <br /> If you have any questions, please contact with us at help@topliveshow.com
                        <br />
                        <br />
                        <br />
                        <p className="txMain blue bold">Ticket price of the event</p>
                        <br />
                        Pellentesque massa erat adipiscing lorem molestie amet augue. Lorem ipsum amet vitae ipsum at a sagittis cras arcu interdum
                    </div>
                    <div className="flex" style={{ justifyContent: "space-between", marginTop: 30 }}>
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
                </div>
                <div style={{ width: "30%" }}>
                    <GetTicket />
                </div>
            </div>
            <style jsx global>{`
                .Ticket {
                    width: calc((100% / 3) - (40px / 3));
                }
            `}</style>
        </div>
    );
}
