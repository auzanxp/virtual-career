import Cookies from 'js-cookie'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContex } from '../../../contex/GlobalContex'

const Header = () => {

    const { datas, method } = useContext(GlobalContex)

    const {
        user,
        setUser
    } = datas

    const {
        handleLogout
    } = method
  

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(Cookies.get('user')))
        }
    })

    return (
        <>
            <header className="z-40 flex items-center m-4 rounded-xl bg-slate-500" style={{ backgroundImage: 'url(/curved0.jpg)' }}>
                <nav className="relative w-full px-4 py-2 mx-6 my-4 shadow-lg rounded-3xl rounded-blur bg-white/80 backdrop-blur-sm backdrop-saturate-200 lg:flex-nowrap">
                    <div className="flex items-center justify-between p-0 pl-6 mx-auto">
                        <div className="flex-grow overflow-hidden lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                            <Link to={'/dashboard/profile'}>
                                <li className="flex flex-row items-center justify-center gap-4">
                                    <div className="flex-shrink-0">
                                        <span className="relative block">
                                            <img alt="profil" src={user?.image_url} className="object-cover w-10 h-10 mx-auto rounded-full " />
                                        </span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-lg font-medium text-gray-600 ">
                                            {user?.name ?? 'user'}
                                        </span>
                                    </div>
                                </li>
                            </Link>
                            <ul className="flex flex-col pl-0 mb-0 list-none lg:flex-row xl:ml-auto">
                                <li className='group'>
                                    <Link
                                        to={'/'}
                                        className="flex px-2 py-2 mx-4 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            className="mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li className='group'>
                                    <span
                                        onClick={handleLogout}
                                        className="flex px-2 py-2 mx-2 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg hover:cursor-pointer"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        className="mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Logout
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
