import Cookies from 'js-cookie'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContex } from '../../../contex/GlobalContex'

const Navbar = () => {

  const { method } = useContext(GlobalContex)


  const {
    handleLogout
  } = method


  return (
    <div className="container top-0 z-50">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <nav className="fixed top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-4 my-4 shadow-lg rounded-3xl rounded-blur bg-white/80 backdrop-blur-sm backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
            <div className="flex items-center justify-between w-full p-0 pl-2 mx-auto flex-wrap-inherit">
              <Link to={'/'} className="text-sm font-bold whitespace-nowrap text-slate-700 lg:ml-0"><img src='/vc.png' alt='Virtual Career' /></Link>
              <div className="flex-grow overflow-hidden lg-max:max-h-0 basis-full lg:flex lg:basis-auto hidden">
                <ul className="flex flex-col pl-0 mb-0 list-none lg:flex-row xl:ml-auto">
                  {
                    !Cookies.get('token') &&
                    <li className='group'>
                      <Link
                        to={'/'}
                        className="flex px-2 py-2 mx-4 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg ">
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
                  }
                  {
                    Cookies.get('token') &&
                    <li className='group'>
                      <Link
                        to={'/dashboard'}
                        className="flex px-2 py-2 mx-4 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg ">
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
                        Dashboard
                      </Link>
                    </li>
                  }

                  <li className='group'>
                    <Link
                      to={'/job-vacancy'}
                      className="flex px-2 py-2 mx-4 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        className="mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Job Vacancy
                    </Link>
                  </li>
                  {
                    !Cookies.get('token') &&
                    <>
                      <li className='group'>
                        <Link
                          to={'/login'}
                          className="flex px-2 py-2 mx-2 transition duration-300 rounded-md group-hover:text-pink-600 group-hover:shadow-lg "
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
                              strokeWidth={2}
                              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>Sign In
                        </Link>
                      </li>
                      <li className='group'>
                        <Link
                          to={'/register'}
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Sign Up
                        </Link>
                      </li>
                    </>
                  }
                  {
                    Cookies.get('token') &&
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
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar

