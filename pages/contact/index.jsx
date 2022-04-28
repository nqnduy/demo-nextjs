import Head from "next/head";
import React from "react";
import Contact from "../../components/Contact";
import MainLayout from "../../components/MainLayout";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact of TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Contact />
            </MainLayout>
        </>
    );
}
