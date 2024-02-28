import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-52 md:pt-5'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full md:h-screen'>
        <div className='pb-4'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className=' text-xl mt-20'>
        I am an experienced web developer and Electrical Engineering student adept at creating innovative and user-friendly applications. With a robust background in React, Django, HTML, and CSS, I bring two years of hands-on experience in both front-end and back-end development.
In my web development journey, I've specialized in developing dynamic and responsive applications using the React framework.I'm also proficient in Django, I've built scalable back-end systems, ensuring seamless data management and integration with front-end components. This allows me to deliver end-to-end solutions that are both user-friendly.
        </p>

        <br />

        <p className=' text-xl'></p>
      </div>
    </div>
  )
}

export default About