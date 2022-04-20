export default function Ticket({ ticket, title, price, children }) {
    return (
        <>
            <div className="Ticket">
                <p className="Ticket__title txMain upc bold">{title}</p>
                <p className="Ticket__price txMain pink bold">
                    {`$${price ? price : ""}`}
                    <span className="txMain pink bold">/ticket</span>
                </p>
                <div className="Ticket__line"></div>
                <div className="Ticket__gift txMain normal content main">{children}</div>
                {ticket ? (
                    <p className="Ticket__value txMain blue upc content">{`${ticket} tickets left`}</p>
                ) : (
                    <p className="Ticket__value txMain purple upc content">sold out tickets</p>
                )}
            </div>
            <style jsx>{`
                .Ticket {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 20px;
                    padding: 20px 0 35px 0;
                    cursor: pointer;
                    &__title {
                        color: #060070;
                        background-color: rgba(6, 0, 112, 0.07);
                        padding: 6px 16px;
                        border-radius: 50px;
                        margin-bottom: 17px;
                    }
                    &__price {
                        font-size: 21px;
                        margin-bottom: 17px;
                    }
                    &__gift {
                        margin-bottom: 23px;
                    }
                    &__value {
                        font-size: 12px;
                    }
                    &__line {
                        width: 100%;
                        height: 1px;
                        border: 1px dashed #b8b7d0;
                        position: relative;
                        margin-bottom: 23px;
                        &:before {
                            position: absolute;
                            content: "";
                            width: 22px;
                            height: 22px;
                            background-color: #110c63;
                            border-radius: 50%;
                            left: -11px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        &:after {
                            position: absolute;
                            content: "";
                            width: 22px;
                            height: 22px;
                            background-color: #110c63;
                            border-radius: 50%;
                            right: -11px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            `}</style>
        </>
    );
}
