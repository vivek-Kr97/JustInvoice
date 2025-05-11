import React from 'react'
import { FiSend } from 'react-icons/fi'
import { MdPrint } from 'react-icons/md'
import { PiFilePdf } from 'react-icons/pi'

const Header = ({handleDownloadPDF}) => {
  return (
    <>
  <header className='w-full flex justify-center items-center gap-4 px-2 '>
  <ul className='flex flex-wrap justify-center items-center gap-4 md:gap-10'>
    <li>
      <button
        onClick={handleDownloadPDF}
        className='font-semibold flex items-center gap-1
        bg-green-600 hover:bg-green-700 text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5 
        rounded-md shadow-md hover:shadow-lg transition-all duration-300'>
        <span><PiFilePdf className='text-xl' /></span>
        Download
      </button>
    </li>
            {/* <li>
                <button
                // onClick={}
                className=' font-semibold flex items-center gap-1
                bg-gray-600 hover:bg-gray-700 text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5 
                rounded-md shadow-md hover:shadow-lg transition-all duration-300'>
                    <span><MdPrint className='text-xl'/> </span>
                    Print
                </button>
            </li> */}
            {/* <li>
                <button
                className=' font-semibold flex items-center gap-1
                bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5 
                rounded-md shadow-md hover:shadow-lg transition-all duration-300'>
                    <span><FiSend className='text-xl' /></span>
                    Send
                </button>
            </li> */}
        
           
        </ul>
      </header>
    </>
  )
}

export default Header
