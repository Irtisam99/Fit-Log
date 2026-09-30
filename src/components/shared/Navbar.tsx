'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    const items = (
        <>
            <li className=''><Link href='/workouts' className={pathname === '/workouts' ? "text-[#C2F800] font-semibold bg-[#1A2312] rounded-2xl px-4 py-1.5" : "text-white"}>Workouts</Link></li>
            <li className=''><Link href='/myPlan' className={pathname === '/myPlan' ? "text-[#C2F800] font-semibold bg-[#1A2312] rounded-2xl px-4 py-1.5" : "text-white"}>My Plan</Link></li>
        </>
    );

    return (
        <>
            <div className="navbar bg-black container mx-auto">

                {/* Left section */}
                <div className="navbar-start">

                    {/* Mobile menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost hover:bg-white/10 lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#C2F800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-black border border-[#C2F800] rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {items}
                        </ul>
                    </div>

                    {/* Logo + FITLOG */}

                    <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 flex-row items-center gap-2 lg:static lg:translate-x-0">
                        <Image src={logo} alt="Fitlog logo" />


                        <span
                            className="
                            cursor-pointer
                            text-xl font-bold
                            text-transparent
                            bg-linear-to-r
                            from-[#C2F800] from-50%
                            to-white to-50%
                            bg-size-[200%_100%]
                            bg-position-[100%_0]
                            bg-clip-text
                            hover:bg-position-[0_0]
                            transition-[background-position]
                            duration-500
                        "
                        >
                            FITLOG
                        </span>
                    </Link>

                </div>

                {/* Center navigation - desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>

                {/* Right section */}
                <div className="navbar-end gap-4">
                    <button className="flex justify-center items-center gap-2">
                        <span className='text-white'>Plan</span>
                        <div className='bg-[#C2F800] px-2 py-0.5 rounded-4xl'>
                            0
                        </div>
                    </button>
                    <button className="flex justify-center items-center gap-2">
                        <span className='text-white'>Saved</span>
                        <div className='px-2 py-0.5 rounded-4xl border-2 border-[#2D313B] text-white font-bold'>
                            0
                        </div>
                    </button>
                </div>

            </div>
            <div className="border-t border-gray-800"></div>

        </>
    );
};

export default Navbar;