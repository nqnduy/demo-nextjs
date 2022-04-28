import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AccountLayout from "../../../components/AccountLayout/index";
import Information from "../../../components/AccountLayout/Information";
import MainLayout from "../../../components/MainLayout";
export default function UserInformationPage() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{`${router.query.id} | Information`}</title>
                <meta name="description" content="Upcoming shows in TOP Live Show" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <AccountLayout>
                    <Information />
                </AccountLayout>
            </MainLayout>
        </>
    );
}
