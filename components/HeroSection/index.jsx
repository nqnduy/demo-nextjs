import Image from "next/image";
import SearchBar from "./SearchBar";
function HeroSection() {
    return (
        <>
            <div className="HeroSection">
                <div className="banner">
                    <div className="banner-title">
                        <div style={{ marginBottom: 30 }}>
                            <Image src="/phongtra1.png" alt="" width={229} height={28.5} layout="intrinsic" />
                        </div>
                        <div style={{ marginBottom: 50 }}>
                            <Image src="/title-banner.png" alt="" width={609} height={321} layout="intrinsic" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                            <div>
                                <Image src="/time.png" alt="" width={137} height={47} layout="intrinsic" />
                            </div>
                            <div>
                                <Image src="/location.png" alt="" width={185} height={55} layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "17vh", width: "35%" }}>
                        <Image src="/pmc.png" alt="" width={186} height={116.28} layout="intrinsic" />
                    </div>
                    <div style={{ marginTop: "36vh" }}>
                        <Image src="/erik-name.png" alt="" width={96} height={60} layout="intrinsic" />
                    </div>
                </div>
            </div>
            <SearchBar />
            <style jsx>{`
                .HeroSection {
                    width: 100%;
                    padding-top: 50px;
                    width: 100%;
                    .banner {
                        width: 100%;
                        height: 80vh;
                        background: url(/bg-banner.png) no-repeat center center/cover;
                        position: relative;
                        display: flex;
                        &-title {
                            margin-top: 16.5vh;
                            left: 0;
                            width: 50%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default HeroSection;
