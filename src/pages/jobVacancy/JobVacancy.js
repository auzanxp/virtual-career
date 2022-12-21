import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContex } from '../../contex/GlobalContex'

const JobVacancy = () => {

  const { datas, method } = useContext(GlobalContex)

  const {
    input,
    dataJob,
    search,
    setSearch,
    fetchStatus,
    setFetchStatus
  } = datas

  const {
    getDataJob,
    handleDescString,
    formatRupiah,
    handleSearch,
    handleInput,
    handleFilterData
  } = method

  useEffect(() => {
    getDataJob();
    // eslint-disable-next-line
  }, [fetchStatus])

  return (
    <>
      <section className="relative flex pb-20 bg-gray-900 ">
        <div className='h-32 bg-gray-900' />
        <div className='flex-wrap items-center justify-center w-full max-w-md pl-6 mt-32 overflow-hidden'>
          <div className='flex pr-2'>
            <form onSubmit={handleSearch} className='w-full'>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-pink-500 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search by Posision..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-pink-500 shadow-md hover:bg-pink-700 focus:ring-4 focus:border-pink-500 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
              </div>
            </form>
          </div>

          <div className='flex py-4 pr-2 mt-4'>
            <form onSubmit={handleFilterData} className='w-full'>
              <span className='mb-2 font-medium text-white text-md'>Filter Data</span>
              <div className='mt-5'>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-white">Company</label>
                <input
                  type="text"
                  className="block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg sm:text-xs focus:ring-pink-700 focus:border-pink-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  name='company_name'
                  placeholder='exp: PT XXX'
                  value={input.company_name}
                  onChange={handleInput}
                />
              </div>
              <div className='mt-2'>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-white">Location</label>
                <input
                  type="text"
                  className="block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg sm:text-xs focus:ring-pink-700 focus:border-pink-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  name='company_city'
                  placeholder='exp: Bali'
                  value={input.company_city}
                  onChange={handleInput}
                />
              </div>
              <div className='mt-2'>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-white">Tenure</label>
                <input
                  type="text"
                  className="block w-full p-2 mb-4 text-gray-900 bg-white border border-pink-300 rounded-lg sm:text-xs focus:ring-pink-700 focus:border-pink-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  name='job_tenure'
                  placeholder='exp: Internship'
                  value={input.job_tenure}
                  onChange={handleInput}
                />
              </div>
              <button
                type='submit'
                className='px-2 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700'
              >Filter</button>
              <button
                className='px-2 py-2 ml-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-900 rounded-lg shadow-md hover:bg-pink-700'
                onClick={() => setFetchStatus(false)}
              >Reset Data</button>
            </form>
          </div>
        </div>

        <div className='flex flex-wrap items-start justify-center w-4/6 gap-5 my-6 mt-24 lg:p-7 lg:justify-start'>
          {dataJob == null &&
            <div className="w-full mx-auto bg-white rounded-lg shadow-lg">
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

          {dataJob !== null && dataJob.map((item) => (
            <div key={item?.id} className="w-full p-6 overflow-hidden bg-white shadow-lg lg:max-w-sm rounded-xl ">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center justify-start flex-grow w-full">
                  <span className="relative block">
                    <img alt="profil" src={item?.company_image_url} className="object-cover w-10 h-10 mx-auto rounded-full " />
                  </span>
                  <div className="flex flex-col items-start ml-4">
                    <span className="text-gray-700 ">
                      {item?.company_name}
                    </span>
                    <span className="text-sm font-light text-gray-400">
                      {item?.company_city}
                    </span>
                  </div>
                </div>
                {item?.job_status === 1 &&
                  <div className="flex-none hidden md:block ">
                    <span className="w-full px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                      OPEN
                    </span>
                  </div>}
                {item?.job_status !== 1 &&
                  <div className="flex-none hidden md:block ">
                    <span className="w-full px-3 py-1 text-sm text-white bg-red-600 rounded-full">
                      CLOSE
                    </span>
                  </div>}
              </div>
              <p className="mt-4 mb-2 text-lg text-gray-800 ">
                {item?.title} / {item?.job_type}
              </p>
              <p className="text-sm font-normal text-gray-400">
                {handleDescString(item?.job_qualification, 20)}
              </p>
              <div className="flex items-center justify-between p-2 my-6 bg-pink-200 rounded">
                <div className="flex items-start justify-between w-full">
                  <p className="flex-grow w-full text-2xl text-gray-700">
                    <span className="font-light text-gray-400 text-md">
                      IDR </span>
                    {formatRupiah(item?.salary_max + '')}
                    <span className="text-sm font-light text-gray-400">
                      /Month
                    </span>
                  </p>
                  <span className="flex-none px-3 py-1 text-sm text-pink-800 border border-pink-800 rounded-full">
                    {item?.job_tenure}
                  </span>
                </div>
              </div>
              <Link to={`/job-vacancy/${item.id}`} type='button' className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Detail
              </Link>
            </div>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default JobVacancy;
