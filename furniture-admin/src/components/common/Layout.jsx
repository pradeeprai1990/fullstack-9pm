import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <section className='grid grid-cols-[15%_auto] gap-5'>
        <SideBar/>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </section>
  )
}
