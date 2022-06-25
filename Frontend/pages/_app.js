import './globals.css'
import Navbar from '../components/MainPage/Header/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps}/>
    </>
  )
}

export default MyApp
