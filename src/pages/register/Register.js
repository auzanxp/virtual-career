import React, { useContext} from 'react'
import { Link} from 'react-router-dom'
import { GlobalContex } from '../../contex/GlobalContex';

const Register = () => {

    const { datas, method } = useContext(GlobalContex)

    const {
        input
    } = datas

    const {
        handleInput,
        handleSubmitRegister
    } = method

return (
    <>
        <main className="mt-0 transition-all duration-200 ease-soft-in-out">
            <section className="min-h-screen mb-32">
                <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-3xl" style={{ backgroundImage: 'url(/register.jpg)' }}>
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-600 opacity-60" />
                    <div className="container z-10">
                        <div className="flex flex-wrap justify-center -mx-3">
                            <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                <h1 className="mt-12 mb-2 text-white">Welcome!</h1>
                                <p className="text-white">Register and create new account for free.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                        <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                    <h5 className='font-bold'>Register here</h5>
                                </div>
                                <div className="flex-auto p-6">
                                    <form onSubmit={handleSubmitRegister}>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                placeholder="Name"
                                                name='name'
                                                value={input.name}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                placeholder="Image url"
                                                name='image_url'
                                                value={input.image_url}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="email"
                                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                placeholder="Email"
                                                name='email'
                                                value={input.email}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                placeholder="Password"
                                                name='password'
                                                value={input.password}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-100 hover:shadow-soft-xs bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-200 hover:bg-slate-500 hover:text-white">
                                                Sign up
                                            </button>
                                        </div>
                                        <p className="mt-4 mb-0 text-sm leading-normal">Already have an account? <Link to={'/login'} className="font-bold text-slate-700">Sign in</Link></p>
                                    </form>
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

export default Register
