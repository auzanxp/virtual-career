import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className='bg-white shadow-xl rounded-xl'>
                <div className='flex items-center justify-end'>
                    <section className="max-w-screen-xl px-4 py-10 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-10">
                    <div className="flex p-4 mx-auto w-52">
                            <img src='/vclogo.png' alt='Virtual Career Logo'></img>
                        </div>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-9 text-pink-700 sm:text-4xl sm:leading-10">
                                Wellcome to Virtual Career Dashboard
                            </h2>
                            <p className="mt-3 text-base leading-7 text-pink-700 sm:mt-4">
                            We believe our experienced are able to fulfill your hiring needs.
                            </p>
                        </div>
                        <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                            <div>
                                <p className="text-5xl font-extrabold leading-none text-pink-700">
                                    +500
                                </p>
                                <p className="mt-2 text-base font-medium leading-6 text-pink-700">
                                    company vacancies
                                </p>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <p className="text-5xl font-extrabold leading-none text-pink-700">
                                    +350
                                </p>
                                <p className="mt-2 text-base font-medium leading-6 text-pink-700">
                                fast recruitment process
                                </p>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <p className="text-5xl font-extrabold leading-none text-pink-700">
                                    24 hours
                                </p>
                                <p className="mt-2 mb-4 text-base font-medium leading-6 text-pink-700">
                                    real time update
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Dashboard
