import Head from "next/head";
import HeroSection from "../components/HeroSection/index";
import MainLayout from "../components/MainLayout";
import Upcoming from "../components/UpComing";
function AboutUs() {
    return (
        <div>
            <Head>
                <title>Upcoming shows</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <HeroSection />
                <Upcoming isList={false} />
            </MainLayout>
            <style jsx global>{``}</style>
        </div>
    );
}

export default AboutUs;
