import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="dark"
      />
    </>
  )
}

export default App
