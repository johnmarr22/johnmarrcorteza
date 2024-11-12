import React from 'react'
import Johnmar from "../assets/Johnmar/johnmarrr.png";  
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b  from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '> 
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-4xl font-bold'><br/><br/><br/>
           I'm a 3rd-year Computer Science Student at Cavite State University, Bacoor Campus.
          </h2>
          <p className=' text-2xl font-bold py-4 '>
            As a 3rd-year computer science student, I have developed a strong foundation in web development, programming, and systems analysis. 
            I've gained experience in HTML, CSS, JavaScript, and responsive design, allowing me to create dynamic and user-friendly websites.
            Additionally, I'm involved in a research project focused on business analysis for an enrollment system, which has sharpened my problem-solving skills and my ability to analyze and improve real-world processes.
            With each project and assignment, I'm building a diverse set of skills and preparing myself for a career in tech.
          </p>
          <div>
            <button className='group text-white font-extrabold text-3xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r bg- from-cyan-600 to-blue-800 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-500 duration-300'>
                <MdOutlineArrowRightAlt size={20} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={Johnmar} alt="John Marr" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
        <br/>
      </div>
    </div>
  )
}

export default Home;
