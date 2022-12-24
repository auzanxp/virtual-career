import React from 'react'

const Footer = () => {
    return (
        <footer className="relative pt-8 pb-6 bg-gray-300">
            <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none" style={{ height: '80px' }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                    <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
                </svg>
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-6/12">
                        <h4 className="text-3xl font-semibold text-pink-600">Let's keep in touch!</h4>
                        <h5 className="mt-0 mb-2 text-lg text-pink-500">
                            Find your dream job of these platform
                        </h5>
                    </div>
                </div>
                <hr className="my-6 border-gray-400" />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full px-4 mx-auto text-center md:w-4/12">
                        <div className="py-1 text-sm font-semibold text-gray-600">
                            Copyright © 2023 All rights reserved
                            <span className="text-gray-600 hover:text-gray-900"> Creative Tim</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
