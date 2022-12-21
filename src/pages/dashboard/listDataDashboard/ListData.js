import React, { useContext, useEffect, useState } from 'react'
import { GlobalContex } from '../../../contex/GlobalContex'

const ListData = () => {

    const { datas, method } = useContext(GlobalContex)
    const [isShow, setIsShow] = useState(false);

    const {
        input,
        search,
        dataJob,
        setSearch,
        fetchStatus,
        setFetchStatus
    } = datas

    const {
        handleInput,
        handleSearch,
        handleFilterData,
        getDataJob,
        handleDescString,
        formatRupiah,
        handleDelete,
        handleEditData
    } = method

    useEffect(() => {
        getDataJob();
        // eslint-disable-next-line
    }, [fetchStatus, setFetchStatus]) 

    return (
        <>
            <div className="w-full min-h-screen bg-white shadow-xl rounded-xl">
                <div className="grid grid-flow-row grid-cols-1 overflow-hidden h-fit lg:grid-flow-col lg:grid-cols-6">
                    <div className="flex flex-col items-center my-5 lg:col-span-6 lg:mx-5">
                        <div className="relative w-full m-3">
                            <div className='flex mb-4'>
                                <form onSubmit={handleSearch} className='w-full'>
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>
                                        <input
                                            type="search"
                                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-pink-500 rounded-lg focus:outline-none bg-gray-50 active:ring-pink-500 focus:ring-pink-700 focus:border-pink-700 "
                                            placeholder="Search by Posision..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            required />
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-pink-500 shadow-md hover:bg-pink-700 focus:ring-4 focus:border-pink-500 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-full p-3 mb-2 border-2 bg-gray-50 rounded-xl">
                                <div className="flex flex-row items-center justify-start text-base font-medium">
                                    <div className="flex flex-row gap-2 ">
                                        {!isShow && (
                                            <button
                                                onClick={() => {
                                                    setIsShow(true);
                                                }}
                                            >
                                                <svg
                                                    className="w-8 h-8 text-pink-600"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        )}
                                        {isShow && (
                                            <button
                                                onClick={() => {
                                                    setIsShow(false);
                                                }}
                                            >
                                                <svg
                                                    className="w-8 h-8 text-pink-600"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                            </button>
                                        )}
                                        <span className="pr-2 mt-1">Filter Data</span>
                                    </div>
                                </div>

                                {isShow && (
                                    <div className="m-5">
                                        <div className='flex'>
                                            <form onSubmit={handleFilterData} className='w-full'>
                                                <div className='mt-2'>
                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium ">Company</label>
                                                    <input
                                                        type="text"
                                                        className="block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700 "
                                                        name='company_name'
                                                        placeholder='exp: PT XXX'
                                                        value={input.company_name}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                                <div className='mt-2'>
                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium ">Location</label>
                                                    <input
                                                        type="text"
                                                        className="block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700"
                                                        name='company_city'
                                                        placeholder='exp: Bali'
                                                        value={input.company_city}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                                <div className='mt-2'>
                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium ">Tenure</label>
                                                    <input
                                                        type="text"
                                                        className="block w-full p-2 mb-4 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700"
                                                        name='job_tenure'
                                                        placeholder='exp: Internship'
                                                        value={input.job_tenure}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                                <button
                                                    type='submit'
                                                    className='px-2 py-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700'
                                                >Filter</button>
                                                <button
                                                    className='px-2 py-1 ml-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-900 rounded-lg shadow-md hover:bg-pink-700'
                                                    onClick={() => setFetchStatus(false)}
                                                >Reset Data</button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col p-3 mt-5 mb-5 overflow-x-auto bg-white drop-shadow-xl rounded-xl lg:col-span-5">
                                <table className="text-sm text-center text-gray-500 drop-shadow-xl w-80 ">
                                    <thead className="items-center text-xs text-white uppercase bg-pink-600">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                NO
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                ACTION
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                TITLE
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                DESCRIPTION
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                QUALIFICATION
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                TYPE
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                TENURE
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                STATUS
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                COMPANY
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                IMAGE
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                CITY
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                MIN SALARY
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                MAX SALARY
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataJob !== null &&
                                            dataJob.map((item, i) => {
                                                return (
                                                    <tr
                                                        key={item.id}
                                                        className="bg-white border-b "
                                                    >
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                                        >
                                                            {i + 1}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            <div className='flex flex-row items-center gap-1'>
                                                                <button
                                                                    type="button"
                                                                    className="px-2 py-2 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                                                    value={item.id}
                                                                    onClick={handleEditData}
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="px-2 py-2 mb-2 mr-2 text-sm font-medium text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                                    value={item.id}
                                                                    onClick={handleDelete}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.title}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {handleDescString(item.job_description, 10)}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {handleDescString(item.job_qualification, 10)}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.job_type}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.job_tenure}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.job_status}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.company_name}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {handleDescString(item.company_image_url, 10)}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.company_city}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {formatRupiah(item.salary_min + '')}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {formatRupiah(item.salary_max + '')}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListData
