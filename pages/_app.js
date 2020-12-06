import {ThemeContext} from 'context/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value="blue">
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default MyApp
