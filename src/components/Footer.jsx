import React from 'react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10 flex justify-between'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>MD. Tahsin Ferdous</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/Tahsin005" target='_blank'><FaGithubSquare /></a>
                <a href="https://www.instagram.com/tahsin_exe/" target='_blank'><FaInstagram /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2024 T.Ferdous</p>
        
    </div>
    );
};

export default Footer;