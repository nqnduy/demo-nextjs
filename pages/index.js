import Head from 'next/head';
import Aboutus from '../components/Aboutus';
import FAQ from '../components/FAQ';
import HeroSection from "../components/HeroSection";
import MainLayout from '../components/MainLayout/index';
import Organizational from '../components/Organizational';
import OurTeam from '../components/OurTeam';
import Upcoming from '../components/UpComing';
import WatchIt from '../components/WatchIt';
import WhatNew from '../components/WhatNew/index';
export default function HomePage() {
  return (
      <div>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

              <MainLayout>
              <HeroSection searchBar={true}/>
                  <Upcoming />
                  <WatchIt />
                  <FAQ />
                  <Organizational />
                  <Aboutus />
                  <OurTeam />
                  <WhatNew />
              </MainLayout>
          <style jsx global>{`
                  .Upcoming,
                  .FAQ {
                      margin-bottom: 50px;
                  }
                  .PreviousShow,
                  .AboutUs,
                  .OurTeam {
                      margin-bottom: 100px;
                  }
          `}</style>

      </div>
  );
}
