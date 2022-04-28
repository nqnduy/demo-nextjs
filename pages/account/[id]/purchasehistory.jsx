import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AccountLayout from "../../../components/AccountLayout/index";
import PurchaseHistory from "../../../components/AccountLayout/PurchaseHistory/index";
import MainLayout from "../../../components/MainLayout";
export default function UserInformationPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{`${router.query.id} | Purchase History`}</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <AccountLayout>
                    <PurchaseHistory />
                </AccountLayout>
            </MainLayout>
        </>
    );
}
