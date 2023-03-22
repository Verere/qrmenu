import Theme from '../styles/theme';
import { DataProvider } from '../store/GlobalState'
import Layout from '../components/Layout';
import NextNProgress from "nextjs-progressbar";
import Script from 'next/script'

// import {DefaultSeo} from 'next-seo'
// import SEO from '../next-seo.config'

export default function App({ Component, pageProps }) {
  return (
    <>     
      
    <DataProvider>
    <Theme>
<Layout>

    <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
        <Component {...pageProps} />
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
           <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></Script>
           <Script src="https://kit.fontawesome.com/a076d05399.js" ></Script>
</Layout>
      </Theme>
    </DataProvider>
    </>
  );
}
 