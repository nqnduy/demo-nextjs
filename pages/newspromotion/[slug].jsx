import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/MainLayout";
import NewDetail from "../../components/WhatNew/NewDetail/index";
export default function GalleryDetailPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{router.query.slug}</title>
                <meta name="description" content="News & Promotion TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <NewDetail />
            </MainLayout>
            <style jsx global>{``}</style>
        </>
    );
}
