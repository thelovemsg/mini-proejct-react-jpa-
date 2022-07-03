import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>main page</div>
      <div>
        <a href="/post">this page!</a>
        <br />
        <Link href="/post">
          <a>this page 222!!</a>
        </Link>
      </div>
      <div>
        <Image src="/image.png" width="500" height="500" />
      </div>
    </div>
  );
}
