import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const Links = [
        {
            id: 1,
            href: 'https://www.linkedin.com/in/laban-mwangi-685502274',
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                 </>
            ),
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            href: 'https://github.com/laban290210',
            child: (
                <>
                    Github <FaGithub size={30} />
                 </>
            ),
            
        },
        {
            id: 3,
            href: 'mailto:labanmw4@gmail.com',
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                 </>
            ),
            
        },
        {
            id: 4,
            href: '',
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                 </>
            ),
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {Links.map(({id, href, child, style,download})=>(
                // eslint-disable-next-line
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 text-white ml-[-100px] hover:ml-[-10px] hover:rounded-2xl' + " "+ style}>
                <a href={href}
                 className='flex justify-between items-center w-full'
                 download={download}
                 target='_blank'
                 rel='noreferrer'
                 >
                   {child}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks