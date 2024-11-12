import React from 'react';
import John1 from "../assets/John1/html.jpg";
import John2 from "../assets/John2/JavaScript.png";
import John3 from "../assets/John3/tailwindcss-logo.png";
import John4 from "../assets/John4/MySQL.jpg";
import Jon5 from "../assets/Jon5/React.png";

const Experience = () => {
  const techs = [
    { id: 1, src: John1, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: John2, title: "JavaScript", style: "shadow-blue-500" },
    { id: 3, src: John3, title: "TailwindCSS", style: "shadow-white-500" },
    { id: 4, src: John4, title: "MySQL", style: "shadow-yellow-500" },
    { id: 5, src: Jon5, title: "React", style: "shadow-green-500" }
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-white bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg mt-20'>
            Experience
          </p>
          <p className="py-10 text-2xl">These are the technologies that I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
