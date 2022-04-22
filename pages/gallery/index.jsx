import Head from "next/head";
import GalleryThumb from "../../components/GalleryThumb";
import MainLayout from "../../components/MainLayout";
import FeatureShowList from "../../components/WatchIt/FeatureShowList";
export default function Gallery() {
    return (
        <>
            <Head>
                <title>Gallery</title>
                <meta name="description" content="Gallery TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <FeatureShowList />
                <GalleryThumb />
                <p className="txMain bold pink textALC hoverText hoverText-pink hoverText-small" style={{ margin: "0 auto" }}>
                    View More
                </p>
            </MainLayout>
            <style jsx global>{`
                .FeatureShowList {
                    margin-bottom: 70px;
                }
                .GalleryThumb {
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    );
}
