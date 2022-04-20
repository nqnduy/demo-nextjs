import React from "react";

export default function Sort() {
    return (
        <div className="SortUpcomingShow PRMain">
            <div className="flexAC">
                <p className="titleSort txMain purple normal">Sort by:</p>
                <div className="typeSort txMain purple normal flexAC">
                    Relevance <img src="/images/icons/arrow-dropdown.svg" alt="" className="arrowSort" />
                </div>
                <div className="typeSort typeSort-last txMain purple normal flexAC">
                    All categories <img src="/images/icons/arrow-dropdown.svg" alt="" className="arrowSort" />
                </div>
            </div>
            <style jsx>{`
                .SortUpcomingShow {
                    position: absolute;
                    top: 10%;
                    right: 0;
                    .titleSort {
                        margin-right: 10px;
                    }
                    .typeSort {
                        margin-right: 45px;
                        gap: 6px;
                        cursor: pointer;
                        &-last {
                            margin-right: 0;
                        }
                    }
                    .arrowSort {
                        width: 9.5px;
                        height: 5.5px;
                    }
                }
            `}</style>
        </div>
    );
}
