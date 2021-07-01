import MainLandingLayout from '@/components/layout/MainLandingLayout/MainLandingLayout';
import ServicesTemplate from '../templates/Services/Services'
import React from 'react'
import Head from 'next/head';

const services = () => {
    return (
        <MainLandingLayout>
            <Head>
                <title>The Ventur | Learn how to get your product idea live</title>
                <meta name="title" content="The Ventur | Learn how to get your product idea live" />
                {/* <meta name="description" content="Every day someone has a great idea, someone abandons that idea because they have no clue where to start. Join to be ready when the opportunity comes." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ventur.digital/" />
                <meta property="og:title" content="Learn how to get your SaaS idea live without a tech background" />
                <meta property="og:description" content="Every day someone has a great idea, someone abandons that idea because they have no clue where to start. Join to be ready when the opportunity comes." />
                <meta property="og:image" content="https://ventur.digital/ogjoin.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ventur.digital/" />
                <meta property="twitter:title" content="Learn how to get your SaaS idea live without a tech background" />
                <meta property="twitter:description" content="Every day someone has a great idea, someone abandons that idea because they have no clue where to start. Join to be ready when the opportunity comes." />
                <meta property="twitter:image" content="https://ventur.digital/ogjoin.png" /> */}
            </Head>
            <ServicesTemplate />
        </MainLandingLayout>
    )
}

export default services
