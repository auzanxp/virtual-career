import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContex } from '../../contex/GlobalContex';

const JobDetail = () => {

    const { Id } = useParams();
    const { datas, method } = useContext(GlobalContex)

    const {
        dataJobDetail,
        setDataJobDetail,
        setFetchStatus
    } = datas

    const {
        formatRupiah
    } = method



    const getDataJobDetail = () => {
        if (Id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
                .then((res) => {
                    setDataJobDetail(res.data)
                    setFetchStatus(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        getDataJobDetail()
    }, [])

    return (
        <>
            <section className="relative pb-20 bg-gray-900 ">
                <div className='h-32 bg-gray-900' />
                {dataJobDetail == null &&
                    <div className="w-full mx-auto bg-white rounded-lg shadow-lg lg:max-w-4xl">
                        <div className="h-48 p-3 overflow-hidden bg-gray-200 rounded-lg animate-pulse">
                        </div>
                        <div className="p-3 h-">
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="h-8 bg-gray-200 rounded animate-pulse">
                                </div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse">
                                </div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse">
                                </div>
                                <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                                </div>
                                <div className="h-8 bg-gray-200 rounded animate-pulse">
                                </div>
                                <div className="...">
                                </div>
                                <div className="col-span-2 ...">
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    dataJobDetail !== null &&
                    <div className='flex flex-wrap items-start justify-center gap-5 my-6 lg:p-7 '>
                        <div className="w-full p-6 overflow-hidden bg-white shadow-lg lg:max-w-4xl rounded-xl ">
                            <div className="flex flex-col items-center justify-between md:flex-row">
                                <div className="flex items-center justify-start flex-grow w-full">
                                    <span className="relative block">
                                        <img alt="profil" src={dataJobDetail?.company_image_url} className="object-cover w-20 h-20 mx-auto rounded-full" />
                                    </span>
                                    <div className="flex flex-col items-start ml-4 text-xl font-bold">
                                        <span className="text-gray-700 ">
                                            {dataJobDetail?.title}  <span className="flex-none px-3 py-1 text-sm text-pink-800 border border-pink-800 rounded-full">
                                                {dataJobDetail?.job_type}
                                            </span>
                                        </span>
                                        <span className="mt-2 text-sm font-normal text-gray-400">
                                            update: {moment(dataJobDetail?.updated_at).fromNow()}
                                        </span>
                                    </div>
                                </div>
                                {
                                    dataJobDetail?.job_status == 1 &&
                                    <div className="flex-none hidden md:block ">
                                        <span className="w-full px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                                            Actively recruiting
                                        </span>
                                    </div>
                                }
                                {
                                    dataJobDetail?.job_status != 1 &&
                                    <div className="flex-none hidden md:block ">
                                        <span className="w-full px-3 py-1 text-sm text-white bg-red-600 rounded-full">
                                            Stop recruiting
                                        </span>
                                    </div>
                                }
                            </div>
                            <p className="mt-4 mb-2 text-lg text-gray-800 ">
                                {dataJobDetail?.company_name}
                            </p>
                            <div className='flex flex-wrap my-4'>
                                <div className="flex text-gray-800 text-md ">
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg> {dataJobDetail?.company_city}
                                </div>
                            </div>
                            <div>
                                <span className="mt-4 mb-2 text-gray-800 text-md ">
                                    Qualification :   <p className="text-sm font-normal text-gray-400">
                                        {dataJobDetail?.job_qualification}
                                    </p>
                                </span>
                            </div>
                            <div>
                                <span className="mt-4 mb-2 text-gray-800 text-md">
                                    Description :   <p className="text-sm font-normal text-gray-400">
                                        {dataJobDetail?.job_description}
                                    </p>
                                </span>
                            </div>
                            <div>
                                <span className="mt-4 mb-2 text-gray-800 text-md ">
                                    Salary :
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-2 my-2 rounded">
                                <div className="flex items-start justify-between w-full">
                                    <span className="flex-grow w-full text-2xl text-gray-700">
                                        <span className="font-light text-gray-400 text-md">
                                            IDR </span>
                                        {formatRupiah(dataJobDetail?.salary_min + '')} - {formatRupiah(dataJobDetail?.salary_max + '')}
                                        <span className="text-sm text-gray-400 font -light">
                                            /Month
                                        </span>
                                    </span>
                                    <span className="flex-none px-3 py-1 text-sm text-pink-800 border border-pink-800 rounded-full">
                                        {dataJobDetail?.job_tenure}
                                    </span>
                                </div>
                            </div>
                            <Link
                                to='/job-vacancy'
                                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                Back
                            </Link>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}

export default JobDetail
