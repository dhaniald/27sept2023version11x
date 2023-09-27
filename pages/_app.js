import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import CommonLayouts from '../components/Layouts/commonlayouts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonLayouts>
        <Component {...pageProps} />
      </CommonLayouts>
    </>
  );
}

export default MyApp
