import Theme from '../styles/theme';
import { DataProvider } from '../store/GlobalState'
import Layout from '../components/Layout';
import NextNProgress from "nextjs-progressbar";

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
       
</Layout>
      </Theme>
    </DataProvider>
    </>
  );
}
 