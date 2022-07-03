import Head from "next/head";
import Script from "next/script";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first post test</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1 style={{ backgroundColor: "yellow" }}>First Post</h1>
    </>
  );
}
