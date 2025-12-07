import { Fragment } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <HomePage />
        <Footer />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;