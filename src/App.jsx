import { BrowserRouter, Routes, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faThumbsUp)


/*  test ändrar igen 2024-11-17  */

const App = () => {
  return (
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </BrowserRouter>
  )
}

export default App