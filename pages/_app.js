import Head from 'next/head';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
