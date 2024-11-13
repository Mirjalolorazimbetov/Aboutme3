import React from 'react'
import Nav from './sass/components/Nav'
import Header from './sass/components/Header'
import Intro from './sass/components/Intro'
import Main from './sass/components/Main'
import Footer from './sass/components/Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Intro/>
      <div className="main_bg">
      <div className="container">
      <h2 class="title">Мои работы</h2>
      <div className="m_cards_box">
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
