import Head from 'next/head';
import { Inter } from '@next/font/google';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
