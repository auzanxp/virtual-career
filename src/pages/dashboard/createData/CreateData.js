import React, { useContext } from 'react'
import { GlobalContex } from '../../../contex/GlobalContex';

const CreateData = () => {

    const { datas, method } = useContext(GlobalContex)

    const {
        input
    } = datas

    const {
        handleInput,
        handleSubmitData
    } = method


    return (
        <>
            <div className="flex justify-center mb-8 shadow-xl bg-gray-50 rounded-xl">
                <div className="mt-10 mb-14 xl:w-3/4">
                    <h2 className='mb-8 text-xl font-bold text-pink-800'>Form &nbsp;<span className='text-pink-600'>Job Input</span></h2>
                    <h3 className='text-base border-b border-b-gray-200 mb-7 mt-7'>Job Information</h3>
                    <form onSubmit={handleSubmitData}>
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Posision
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            placeholder='exp: FrontendDeveloper'
                            name="title"
                            value={input.title}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="textarea"
                            rows="4"
                            cols="50"
                            name="job_description"
                            placeholder='exp: Design, develop, and implement based on documentation'
                            value={input.job_description}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Qualification
                        </label>
                        <textarea
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="textarea"
                            rows="4"
                            cols="50"
                            name="job_qualification"
                            placeholder='exp: At least 1 year of experience in related posision'
                            value={input.job_qualification}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Job Type
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            name="job_type"
                            placeholder='exp: WFO/WFH/Hybrid'
                            value={input.job_type}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Tenure
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            name="job_tenure"
                            placeholder='exp: Fulltime/Internship/Contract'
                            value={input.job_tenure}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Minimum Salary
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="number"
                            name="salary_min"
                            min="0"
                            placeholder='exp: 2000000'
                            value={input.salary_min}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Maximum Salary
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="number"
                            name="salary_max"
                            min="0"
                            placeholder='exp: 2000000'
                            value={input.salary_max}
                            onChange={handleInput}
                            required
                        />
                        <div className='flex flex-row items-center gap-3'>
                            <span className='font-bold'>Status :</span>
                            <div className='flex flex-row gap-2'>
                                <input
                                    type="radio"
                                    name="job_status"
                                    value={1}
                                    onChange={handleInput}
                                    checked={input.job_status === 1}
                                    required
                                />
                                <label>
                                    Opened
                                </label>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <input
                                    type="radio"
                                    name="job_status"
                                    value={0}
                                    onChange={handleInput}
                                    checked={input.job_status === 0}
                                    required
                                />
                                <label>
                                    Closed
                                </label>
                            </div>
                        </div>
                        <h3 className='text-base border-b border-b-gray-200 mb-7 mt-7'>Company Information</h3>
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Company Name
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            name="company_name"
                            placeholder='exp: PT XX'
                            value={input.company_name}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Location
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            name="company_city"
                            placeholder='exp: DKI Jakarta'
                            value={input.company_city}
                            onChange={handleInput}
                            required
                        />
                        <label className="inline-block mb-2 text-gray-700 form-label">
                            Logo
                        </label>
                        <input
                            className="form-control block w-full mb-3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-500 focus:outline-none"
                            type="text"
                            name="company_image_url"
                            placeholder='image url (exp: https://google.com/picture.jpg)'
                            value={input.company_image_url}
                            onChange={handleInput}
                            required
                        />
                        <button
                            type="submit"
                            className="inline-block mt-2 px-6 py-2.5  bg-pink-500 hover:bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateData
