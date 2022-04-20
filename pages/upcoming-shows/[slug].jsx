import Head from "next/head";
import { useRouter } from "next/router";
import HeroSection from "../../components/HeroSection";
import MainLayout from "../../components/MainLayout";
import DetailCard from "../../components/Upcoming/Detail";
export default function UpComingShowDetail() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{router.query.slug}</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <HeroSection />
                <DetailCard />
            </MainLayout>
            <style jsx global>{`
                .UpComingShowDetail {
                    margin-top: 100px;
                }
            `}</style>
        </>
    );
}
