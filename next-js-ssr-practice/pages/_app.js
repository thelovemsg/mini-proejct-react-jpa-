import "../styles/globals.css";
import { wrapper } from "../src/store/store";
//_app.js파일은 다른 페이지들이 생성될 때 이 파일을 바탕으로 초기화됨.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
