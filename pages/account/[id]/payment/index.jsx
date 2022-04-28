import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AccountLayout from "../../../../components/AccountLayout/index";
import Payment from "../../../../components/AccountLayout/Payment";
import MainLayout from "../../../../components/MainLayout";
export default function PaymentMethodsPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{`${router.query.id} | Payment Methods`}</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <AccountLayout>
                    <Payment />
                </AccountLayout>
            </MainLayout>
        </>
    );
}
