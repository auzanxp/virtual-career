import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContex } from '../../contex/GlobalContex';

const Login = () => {

    const { datas, method } = useContext(GlobalContex)

    const {
        input
    } = datas

    const {
        handleInput,
        handleSubmitLogin
    } = method

    return (
        <>
            <main className="mt-0 transition-all duration-200 ease-soft-in-out">
                <section>
                    <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                        <div className="container z-10">
                            <div className="flex flex-wrap mt-0 -mx-3">
                                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                    <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                            <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="flex-auto p-6">
                                            <form onSubmit={handleSubmitLogin}>
                                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700">Email</label>
                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-500 focus:outline-none focus:transition-shadow"
                                                        placeholder="Email"
                                                        name='email'
                                                        value={input.email}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                </div>
                                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700">Password</label>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-500 focus:outline-none focus:transition-shadow"
                                                        placeholder="Password"
                                                        name='password'
                                                        value={input.password}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                            <p className="mx-auto mb-6 text-sm leading-normal">
                                                Don't have an account? <Link to={'/register'} className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                                                    Sign up now!
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                    <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                                        <div className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10" style={{ backgroundImage: 'url("/curved6.jpg")' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login
