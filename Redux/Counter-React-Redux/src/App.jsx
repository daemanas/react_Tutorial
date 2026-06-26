import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Display from './components/Display'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  return (
    <>
      <center className="px-4 py-5 my-5 text-center"> 
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto"> 
            <Display /> 
            <Button />
          </div>
        </Container>
      </center>
    </>
  )
}

export default App;
