import Head from "next/head";
import Aboutus from "../../components/Aboutus";
import FAQ from "../../components/FAQ/index";
import MainLayout from "../../components/MainLayout";
import Organizational from "../../components/Organizational/index";
import OurClient from "../../components/OurClient";
import OurTeam from "../../components/OurTeam/TypeCenter";
export default function AboutUsPage() {
    return (
        <div>
            <Head>
                <title>About us</title>
                <meta name="description" content="About us TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Aboutus />
                <OurTeam />
                <OurClient />
                <Organizational />
                <FAQ />
            </MainLayout>
            <style jsx global>{`
                .AboutUs {
                    margin-top: 180px;
                }
                .OurTeam,
                .OurClient {
                    margin-top: 100px;
                }
                .FAQ {
                    margin: 100px 0;
                }
            `}</style>
        </div>
    );
}
