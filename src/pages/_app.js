import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  if (router.pathname ==="/404" || router.pathname ==="/signup" || router.pathname === "/login"){
    return(
      <Component {...pageProps} />
    )
  }
  return(
    <Layout>
      <Component {...pageProps} />;
    </Layout>

  ) 
}
