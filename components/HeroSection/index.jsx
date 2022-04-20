import Image from "next/image";
import SearchBar from "./SearchBar";
function HeroSection({ searchBar }) {
    return (
        <>
            <div className="HeroSection">
                <div className="banner">
                    <div className="banner-title">
                        <div style={{ marginBottom: 30 }}>
                            <Image src="/images/phongtra1.png" alt="" width={229} height={28.5} layout="intrinsic" />
                        </div>
                        <div style={{ marginBottom: 50 }}>
                            <Image src="/images/title-banner.png" alt="" width={609} height={321} layout="intrinsic" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                            <div>
                                <Image src="/images/time.png" alt="" width={137} height={47} layout="intrinsic" />
                            </div>
                            <div>
                                <Image src="/images/location.png" alt="" width={185} height={55} layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "17vh", width: "35%" }}>
                        <Image src="/images/pmc.png" alt="" width={186} height={116.28} layout="intrinsic" />
                    </div>
                    <div style={{ marginTop: "36vh" }}>
                        <Image src="/images/erik-name.png" alt="" width={96} height={60} layout="intrinsic" />
                    </div>
                </div>
            </div>
            {searchBar && <SearchBar />}
            <style jsx>{`
                .HeroSection {
                    width: 100%;
                    padding-top: 50px;
                    width: 100%;
                    z-index: 9;
                    .banner {
                        width: 100%;
                        height: 80vh;
                        background: url(/images/bg-banner.png) no-repeat center center/cover;
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
