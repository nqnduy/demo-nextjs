import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Success from "../../../../components/AccountLayout/Payment/Success";
import MainLayout from "../../../../components/MainLayout/index";
export default function TicketDetailPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Success</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Success />
            </MainLayout>
        </>
    );
}
