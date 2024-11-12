import React from 'react'

const Portfolio = () => {
  return (
    <div name="Portfolio" className=' bg-black  w-full h-screen md:screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-coljustify-center w-full h-full'>
        <div className='py-20'>
        <p className='text-4xl font-bold inline border-b-4 border-white bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg'>Portfolio</p>
                <p className='py-6 text-2xl'>Check out some of my works here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div>

                    <button>Picture</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio