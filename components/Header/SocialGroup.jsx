import Image from "next/image";
import React from "react";

export default function SocialGroup() {
    return (
        <div className="SocialGroup">
            <div className="SocialGroup__item facebook">
                <Image src="/images/icons/facebook.svg" alt="Facebook" width={10} height={18} />
            </div>
            <div className="SocialGroup__item tiktok">
                <Image src="/images/icons/tiktok.svg" alt="Tiktok" width={15} height={18} />
            </div>
            <div className="SocialGroup__item youtube">
                <Image src="/images/icons/youtube.svg" alt="Youtube" width={20} height={14} />
            </div>
            <style jsx>{`
                .SocialGroup {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    &__item {
                        cursor: pointer;
                        transition: 0.3s;
                        &:hover {
                            transform: scale(1.1);
                            transition: 0.3s;
                        }
                    }
                }
            `}</style>
        </div>
    );
}
