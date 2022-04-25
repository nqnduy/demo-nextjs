import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import GalleryDetail from "../../components/GalleryDetail";
import MainLayout from "../../components/MainLayout";
export default function GalleryDetailPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{router.query.slug}</title>
                <meta name="description" content="Gallery TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <GalleryDetail />
            </MainLayout>
            <style jsx global>{`
                .GalleryDetail {
                    padding-top: 200px;
                    padding-bottom: 70px;
                }
                .slick-list {
                    padding: 0 !important;
                }
            `}</style>
        </>
    );
}
