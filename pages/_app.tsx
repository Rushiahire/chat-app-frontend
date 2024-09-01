import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '@/components/Layout';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary isFallback={true}>
        <Layout>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  );
}