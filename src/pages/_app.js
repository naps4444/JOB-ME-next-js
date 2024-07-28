// {import Layout from "@/components/Layout";
// import "@/styles/globals.css";
// import { useAppContext } from "@/context/AppContext";

// export default function App({ Component, pageProps, router }) {
//   if (router.pathname ==="/404" || router.pathname ==="/signup" || router.pathname === "/login"){
//     return(
//       <useAppContext>
        
//       <Component {...pageProps} />
      
//       </useAppContext>
//     )
//   }
//   return(
//     <Layout>
//       <Component {...pageProps} />;
//     </Layout>

//   ) 
// }
// }



// pages/_app.js
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps, router }) {
  const noLayoutPaths = ["/404", "/signup", "/login"];

  return (
    <AppProvider>
      {noLayoutPaths.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AppProvider>
  );
}
