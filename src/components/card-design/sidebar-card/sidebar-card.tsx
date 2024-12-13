import React from 'react'

const SidebarCard = () => {
  return (
    <main className='flex flex-col justify-center gap-4 items-center '>
        {/* card 1  */}
        <div className='flex gap-4 items-start mt-10'>
         {/* cart title number */}
         <section className='self-start text-blue'>
            <b className='text-sm'>1</b>
            <p className='text-base'>*</p>
          </section>
        {/* card parts  */}
          <section className=" h-40  ">
             <div className='border-2 border-blue  rounded-xl h-full w-60 text-sm'></div>
          </section>
    </div>
        {/* card 1  */}
        <div className='flex gap-2 items-start '>
         {/* cart title number */}
         <section className='self-start'>
         <b className='text-sm'>2</b>
         <p className='text-base'>*</p>
          </section>
        {/* card parts  */}
          <section className=" h-40  ">
             <div className='border-2 rounded-xl h-full w-60 text-sm'></div>
          </section>
    </div>
        {/* card 1  */}
        <div className='flex gap-4 items-start '>
         {/* cart title number */}
         <section className='self-start'>
         <b className='text-sm'>3</b>
         <p className='text-base'>*</p>
          </section>
        {/* card parts  */}
          <section className=" h-40   ">
             <div className='border-2 rounded-xl h-full w-60 text-sm'></div>
          </section>
    </div>
    

    </main>
  )
}

export default SidebarCard