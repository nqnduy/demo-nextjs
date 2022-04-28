import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AccountLayout from "../../../../components/AccountLayout";
import TicketDetail from "../../../../components/AccountLayout/TicketDetail";
import MainLayout from "../../../../components/MainLayout/index";
export default function TicketDetailPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{`${router.query.slug} | Ticket detail`}</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <AccountLayout>
                    <TicketDetail />
                </AccountLayout>
            </MainLayout>
        </>
    );
}
