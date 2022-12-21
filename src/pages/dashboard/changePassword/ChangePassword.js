import React, { useContext } from 'react'
import { GlobalContex } from '../../../contex/GlobalContex'

function ChangePassword() {

    const { datas, method } = useContext(GlobalContex)

    const {
        input,
        msg
    } = datas

    const {
        handleInput,
        handleChangePassword
    } = method

    return (
        <div className='bg-white shadow-xl rounded-xl'>
            <div className="flex justify-center">
                <div className="mt-10 mb-14 lg:w-1/2">
                    <h2 className='flex items-center justify-center mb-8 text-xl font-bold text-pink-800'>Change &nbsp; <span className='text-pink-600'>Password</span> </h2>
                    {
                        msg && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                            <span className="font-medium">OK!</span> {msg}
                        </div>

                    }
                    {
                        msg == null && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <span className="font-medium">Error !</span> Change a few things up and try submitting again.
                        </div>
                    }
                    <form onSubmit={handleChangePassword}>
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Current Password
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none rounded-full"
                            type="password"
                            name="current_password"
                            placeholder='current Password'
                            value={input.current_password}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            New Password
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="password"
                            name="new_password"
                            placeholder='new password'
                            value={input.new_password}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Confirm Password
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="password"
                            name="new_confirm_password"
                            placeholder='confirm new password'
                            value={input.new_confirm_password}
                            onChange={handleInput}
                            required
                        />
                        <button
                            type="submit"
                            className="inline-block mt-2 px-6 py-2.5  bg-pink-500 hover:bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
