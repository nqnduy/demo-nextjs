import Head from "next/head";
import React from "react";
import MainLayout from "../../components/MainLayout";
import NewsPromotion from "../../components/News&Promotion/index";
import WhatNew from "../../components/WhatNew";
export default function NewsPromotionPage() {
    return (
        <>
            <Head>
                <title>News & Promotion</title>
                <meta name="description" content="News & Promotion in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <div className="NewsPromotionPage">
                    <WhatNew hasViewMore={false} />
                    <NewsPromotion />
                </div>
            </MainLayout>
            <style jsx global>{`
                .NewsPromotionPage {
                    .WhatNew {
                        padding-top: 200px;
                        padding-bottom: 70px;
                        background-color: #05005e;
                    }
                }
            `}</style>
        </>
    );
}
