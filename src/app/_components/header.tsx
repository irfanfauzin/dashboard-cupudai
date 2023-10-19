'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react';

function header({title = ''}) {
    const [showDiv, setShowDiv] = useState(false);
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };
    return (
        <div className='w-full flex h-20 items-center justify-between float-right'>
            <div className='flex py-2 w-[550px] items-center ml-[20px]'>
                <Link href="/">
                    <Image
                        src={'/logo.png'}
                        width={40}
                        height={40}
                        alt='logo'></Image>
                </Link>

                <Link href="/">
                    <h1 className='text-[26px] py-3 font-bold bg-gradient-to-r from-violet1 to-pink1 bg-clip-text text-transparent'>CUPID
                        <span className='text-white'>AI
                        </span></h1>
                </Link>

                <h1 className='text-[32px] pl-[120px] font-bold'>{title}</h1>

            </div>

            <div className='w-[500px] h-[50px] flex gap-[17px] justify-end mr-[20px]'>

                <div className="relative flex items-center w-[320px] h-12 rounded-[60px] focus-within:shadow-lg bg-[#0F0F0F] overflow-hidden">
                    <div className="grid place-items-center ml-[20px] h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#3F495F">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full bg-[#0F0F0F] outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." />
                </div>

                <div className='w-[50px] h-[50px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </div>
                <div onClick={toggleDiv} className='w-[50px] h-[50px] rounded-full border-[1.5px] border-solid border-[#0F0F0F] cursor-pointer flex justify-center items-center'>
                    <Image
                        src={'/logo.png'}
                        width={40}
                        height={40}
                        alt='logo'>

                    </Image>
                </div>
                {showDiv && (
                    <div className='w-[260px] h-[170px] absolute left mt-[60px] p-2 bg-[#0e0e0e] rounded-[20px] flex justify-center items-center'>
                        <ul>
                        <li>
                                <Link href='#'>
                                    <div className='w-[230px] h-[40px] pl-[20px] bg-[#1b1b1b] rounded-md flex items-center hover:bg-[#2a2a2a] border-l-4 border-transparent hover:border-[#664DFF]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                        <h1 className='ml-[10px] text-gray-300 text-[15px]'>Profile</h1>
                                    </div>
                                </Link>
                            </li>
                            <li className='mt-[10px]'>
                                <Link href='#'>
                                    <div className='w-[230px] h-[40px] pl-[20px] bg-[#1b1b1b] rounded-md flex items-center hover:bg-[#2a2a2a] border-l-4 border-transparent hover:border-[#664DFF]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                        </svg>
                                        <h1 className='ml-[10px] text-gray-300 text-[15px]'>Team</h1>
                                    </div>
                                </Link>
                            </li>
                            <li className='mt-[10px]'>
                                <Link href='#'>
                                    <div className='w-[230px] h-[40px] pl-[20px] bg-[#1b1b1b] rounded-md flex items-center hover:bg-[#2a2a2a] border-l-4 border-transparent hover:border-[#664DFF]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                                        </svg>
                                        <h1 className='ml-[10px] text-gray-300 text-[15px]'>Settings</h1>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </div>

    )
}

export default header
