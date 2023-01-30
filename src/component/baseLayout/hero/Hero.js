import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <main>
                <div className="relative flex items-center content-center justify-center pt-16 pb-32" style={{ minHeight: '75vh' }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url(/curved1.jpg)' }}>
                        <span id="blackOverlay" className="absolute w-full h-full bg-black opacity-75" />
                    </div>
                    <div className="container relative mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                                <div className="pr-10">
                                    <h1 className="text-5xl font-semibold text-white">
                                        FIND YOUR DREAM JOB!
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Forget the old rules. You can have the best job.
                                        Right now. Right here.
                                        We’re
                                        the world’s work
                                        marketplace
                                    </p>
                                    <Link to={'/job-vacancy'} type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 mt-6 text-sm font-medium text-white bg-pink-700 rounded-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-900">
                                        <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>See all job opportunities
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none" style={{ height: '70px' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
                <section className="pb-20 -mt-24 bg-gray-300">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-pink-400 rounded-full shadow-lg">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
                                        </div>
                                        <h6 className="text-xl font-semibold">Proof of quality</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Check any pro work samples, client reviews, and identity verification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 text-center md:w-4/12">
                                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-fuchsia-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        </div>
                                        <h6 className="text-xl font-semibold">Safe and secure</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Focus on your work knowing we help protect your data and privacy.
                                            We’re here with 24/7 support if you need it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 pt-6 text-center md:w-4/12">
                                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-pink-600 rounded-full shadow-lg">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        </div>
                                        <h6 className="text-xl font-semibold">Verified Company</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Work with the largest network of independent professionals and get things done
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                                </div>
                                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                                    How can we help you?
                                </h3>
                                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                                    Apart from easily finding jobs, companies were also reaching out to me to apply for their roles! Getting noticed on Virtual Crareer made my job search fast and easy.
                                </p>
                                <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                                    Finding remote work was so easy to do in Virtual Career! I could easily track all my ongoing applications and I kept getting great job recommendations.
                                </p>
                                <span className="mt-8 font-bold text-gray-800">The simplest way to career opportunities starts here</span>
                            </div>
                            <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-pink-600 rounded-lg shadow-lg">
                                    <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" className="w-full align-middle rounded-t-lg" />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 block w-full" style={{ height: '95px', top: '-94px' }}>
                                            <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current" />
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Find a career that works for you
                                        </h4>
                                        <p className="mt-2 font-light text-white text-md">
                                            We transform the way candidates find jobs and companies hire talent.
                                        </p>
                                        <p className="mt-2 font-light text-white text-md">
                                            Work with the most innovative companies around the world
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-20">
                    <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none" style={{ height: '80px' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                            <polygon className="text-white fill-current" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                                <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                            </div>
                            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                                <div className="md:pr-12 pt-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-pink-600 bg-pink-300 rounded-full shadow-lg">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                                    </div>
                                    <h3 className="text-3xl font-semibold">Grow with the company your choice</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on Glassdoor today.
                                    </p>
                                    <ul className="mt-6 list-none">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Find the Right Job
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"></path></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Research Companies</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Apply To Jobs</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-20 pb-48">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-center text-center">
                            <div className="w-full px-4 lg:w-6/12">
                                <h2 className="text-4xl font-semibold">More than 5 million professionals have found jobs through us</h2>
                                <p className="m-4 text-lg leading-relaxed text-gray-600">
                                    Posting now includes out of the box integration with us, as well as an open API that allows you to seamlessly integrate with your recruter systems.
                                </p>
                            </div>
                        </div >
                        <img className='items-center justify-center w-1/2 mx-auto' src='/companies.png' alt='companie'></img>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Hero
