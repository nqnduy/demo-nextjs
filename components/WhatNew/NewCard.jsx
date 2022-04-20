import React from "react";
import ImageWrap from "../ImageWrap";
function NewCard({ image, column, category, title, content, time }) {
    return (
        <>
            <div className={`NewCard ${column}`}>
                <div className="NewCard__img">
                    <ImageWrap src={image} gif="/images/gif/495x314.gif" bora="bora15" />
                </div>
                <div className="NewCard__wrapText">
                    <pre className="flexAC timeLocation">
                        <p className="txMain pink upc normal">{category}</p> <p className="txMain purple upc normal">{` • ${time}`}</p>
                    </pre>
                    <p className="txMain overText2 NewCard__wrapText-title">{title}</p>
                    <p className="txMain purple normal NewCard__wrapText-content">{content}</p>
                </div>
            </div>
            <style jsx>{`
                .NewCard {
                    .timeLocation {
                        margin: 10px 0;
                    }
                    &__img {
                        border-radius: 15px;
                    }
                    &__wrapText {
                        &-title {
                            font-size: 28px;
                            margin-bottom: 14px;
                            height: calc(2.5em + 5px);
                        }
                    }
                    &.center,
                    &.right {
                        .NewCard {
                            &__wrapText {
                                .timeLocation {
                                    margin-bottom: 0;
                                }
                                &-title {
                                    font-size: 16px;
                                    height: calc(2.8em + 5px);
                                }
                                &-content {
                                    display: none;
                                }
                            }
                        }
                    }
                    &.right {
                        display: flex;
                        align-items: flex-start;
                        height: 100%;
                        .NewCard {
                            &__img {
                                width: 50%;
                            }
                            &__wrapText {
                                margin-left: 15px;
                                width: 50%;
                                .timeLocation {
                                    margin-top: 0;
                                }
                                &-title {
                                    -webkit-line-clamp: 3;
                                    height: calc(4.5em + 5px);
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default NewCard;
