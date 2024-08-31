import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        {/* <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
              /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}