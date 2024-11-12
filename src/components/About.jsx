import React from 'react'

const About = () => {
  return (
    <div name="About" className=' w-full h-screen bg-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-coljustify-center w-full h-full'>
            <div className='py-20'>
            <p className='text-4xl font-bold inline  rounded-md border-b-4 bg-gradient-to-r bg- from-cyan-600 to-blue-800  text-white cursor-pointer'>
            About
            </p>

            </div> 
            <p className=' text-2xl  py-20 mt-20'>
            Hi, I’m John Marr Corteza!
             I'm an aspiring web developer and a 3rd-year computer science student. I’m passionate about building functional, visually engaging websites and constantly working to improve my skills. Excited to turn ideas into digital solutions!
   
            </p>
        </div>
    </div>
  )
}

export default About