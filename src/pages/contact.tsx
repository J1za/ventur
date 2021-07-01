import Head from 'next/head';
import MainLandingLayout from '../components/layout/MainLandingLayout/MainLandingLayout';

import Contact from '../templates/Contact/Contact';

export default function ContactPage() {
  return (
    <MainLandingLayout isMinimal>
      <Head>
        <title>The Ventur | Get your product idea live</title>
        <meta name="title" content="The Ventur | Get your product idea live" />
        <meta name="description" content="We are a SaaS Product studio that helps entrepreneurs research, design, and build their product ideas." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ventur.digital/" />
        <meta property="og:title" content="The Ventur | Get your product idea live" />
        <meta property="og:description" content="We are a SaaS Product studio that helps entrepreneurs research, design, and build their product ideas." />
        <meta property="og:image" content="https://ventur.digital/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ventur.digital/" />
        <meta property="twitter:title" content="The Ventur | Get your product idea live" />
        <meta property="twitter:description" content="We are a SaaS Product studio that helps entrepreneurs research, design, and build their product ideas." />
        <meta property="twitter:image" content="https://ventur.digital/og.png" />
      </Head>
      <Contact />
    </MainLandingLayout>
  );
}
