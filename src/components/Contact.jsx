import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justofy-center max-w-screen-lg mx-auto h-full'>
        <div className='py-20'>
        <p className='text-4xl font-bold inline border-b-4 border-white bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg '>Contact</p>
            <p className='py-20 text-2xl font-bold'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justofy-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2 '>
                    <input type='Text'
                    name='name'
                    placeholder='Enter you name'
                    className='p-2 bg-transparent border-2 rounded-md text-white text-3xl focus:outline-none'>
                    </input>

                    <input type='Text'
                    name='email'
                    placeholder='Enter you email'
                    className='p-2 bg-transparent border-2 rounded-md text-white text-3xl focus:outline-none'>
                    </input>

                    <textarea
                    name='message'
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white  text-3xl focus:outline-none'>
                    </textarea>
                     <button className='text-white font-extrabold text-3xl bg-gradient-to-b from-cyan-500 to-blue-800 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk

                     </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact