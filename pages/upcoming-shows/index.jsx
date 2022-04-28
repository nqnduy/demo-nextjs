import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import MainLayout from "../../components/MainLayout";
import Upcoming from "../../components/UpComing";
export default function UpComingShowsPage() {
    return (
        <div>
            <Head>
                <title>Upcoming shows</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <HeroSection searchBar={true} />
                <Upcoming isList={false} />
            </MainLayout>
            <style jsx global>{`
                .Upcoming {
                    margin-bottom: 50px;
                }
            `}</style>
        </div>
    );
}
