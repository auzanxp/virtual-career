import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className="relative hidden py-4 my-4 ml-4 bg-white shadow-xl lg:block w-80 rounded-xl h-fit">
            <div className="h-full bg-white ">
                <div className="flex items-center justify-start pt-2 pb-5 border-b-4 border-gray-200 dark:border-gray-200 pl-7">
                    <Link
                        to={'/'}
                        className="text-xl font-bold dark:text-white">
                        <img src='/vc.png' alt='Virtual Career' />
                    </Link>
                </div>
                <nav className="mt-6">
                    <div>
                        <Link
                            to={'/dashboard'}
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-500 transition-colors duration-200 border-l-4 border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500 hover:text-white"
                        >
                            <span className="text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                DASHBOARD
                            </span>
                        </Link>
                        <Link
                            to={'/dashboard/list-data'}
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-500 transition-colors duration-200 border-l-4 border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500 hover:text-white">
                            <span className="text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                LIST JOB VACANCY
                            </span>
                        </Link>
                        <Link
                            to={'/dashboard/list-data/create'}
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-500 transition-colors duration-200 border-l-4 border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500 hover:text-white">
                            <span className="text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                                    />
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                ADD NEW JOB
                            </span>
                        </Link>
                        <Link
                            to={'/dashboard/profile'}
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-500 transition-colors duration-200 border-l-4 border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500 hover:text-white">
                            <span className="text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                PROFILE
                            </span>
                        </Link>
                        <Link
                            to={'/dashboard/change-password'}
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-500 transition-colors duration-200 border-l-4 border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500 hover:text-white">
                            <span className="text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                CHANGE PASSWORD
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
