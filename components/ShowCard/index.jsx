import Button from "../Button";
import ImageWrap from "../ImageWrap";

function ShowCard({ time, location, image, price, title, ticket }) {
    return (
        <>
            <div className="showCard">
                <div>
                    <ImageWrap src={image} gif="/images/gif/343x270.gif" />
                </div>
                <div className="showCard__bottom">
                    <div className="txMain small purple upc normal" style={{ marginBottom: 8 }}>
                        {`${time} • ${location}`}
                    </div>
                    <div className="txMain overText2 showCard__title">{title}</div>
                    <pre className="showCard__price txMain normal pink upc">
                        Start at <strong style={{ fontFamily: "fm-b" }}>{price}</strong> • <p className="txMain normal upc blue">{`${ticket} TICKETS LEFT`}</p>
                    </pre>
                    <Button width="fullWidth">Get ticket now</Button>
                </div>
            </div>
            <style jsx>{`
                .showCard {
                    cursor: pointer;
                    &__bottom {
                        color: "#fff";
                        padding: 20px;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        background-color: rgba(255, 255, 255, 0.05);
                    }
                    &__title {
                        font-size: 18px;
                        margin-bottom: 14px;
                        height: calc(2.5em + 5px);
                    }
                    &__price {
                        display: flex;
                        align-items: center;
                        margin-bottom: 12px;
                    }
                }
            `}</style>
        </>
    );
}

export default ShowCard;
