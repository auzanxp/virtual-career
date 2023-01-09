import React from 'react'
import './Modal.css';

export default function Modal({ name, value, action, close }) {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div>
                        <p>Anda yakin ingin menghapus data <span className='font-bold'> {name} </span>?</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <button
                            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            value={value}
                            onClick={action}
                        >OK</button>
                        <button
                            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            onClick={close}
                        >Batal</button>
                    </div>
                </div>
            </div>
        </>
    )
}


