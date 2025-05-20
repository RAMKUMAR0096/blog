import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <section>
      <Header/>
      <main className='min-h-[78vh]'>
          <Outlet/>
      </main>
      <Footer/>
      <Toaster />
    </section>
  )
}

export default App