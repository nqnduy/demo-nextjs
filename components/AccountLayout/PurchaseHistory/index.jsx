import React from "react";
import Button from "../../Button";
import MyTicketCard from "../../Card/MyTicketCard";
import Paginate from "../../Paginate/index";
import SortDropdown from "../../SortDropDown/index";

export default function PurchaseHistory() {
    return (
        <>
            <div className="PurchaseHistory">
                <div className="PurchaseHistory__title flexSB">
                    <h2 className="txMain bold fz-18">Purchase history</h2>
                    <div className="flexAC">
                        <p className="titleSort txMain purple normal">Sort by:</p>
                        <SortDropdown title="Relevance" />
                        <SortDropdown title="All categories" />
                    </div>
                </div>
                <div className="flexCOL" style={{ gap: 30, marginBottom: 40 }}>
                    {[...Array(4)].map((_, index) => (
                        <MyTicketCard
                            key={index}
                            gap={30}
                            image="/images/card1.png"
                            title="This is title of liveshow. Max long two line, full will show 3 dots"
                            time="Feb 27, 2022"
                            location="ho chi minh">
                            <Button>
                                Watch now
                                <img src="/images/icons/playv1.svg"></img>
                            </Button>
                        </MyTicketCard>
                    ))}
                </div>
                <Paginate totalPage={10} />
            </div>
            <style jsx global>{`
                .PurchaseHistory {
                    &__title {
                        margin-bottom: 24px;
                    }
                    .titleSort {
                        margin-right: 10px;
                    }
                    .typeSort:last-child {
                        margin-right: 0;
                    }
                    .Button {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            `}</style>
        </>
    );
}
