import Homepage from '@/components/home-page/homepage'
import Sidebar from '@/components/shared-components/sidebar'
import React from 'react'

const Layout = () => {
  return (
    <main className=' grid grid-cols-12'>
        <section className='col-span-2'>
        <Sidebar />
        </section>

        <section className='col-span-10'>
            <Homepage />
        </section>
        


    </main>
  )
}

export default Layout