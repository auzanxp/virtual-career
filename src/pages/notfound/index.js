import React from 'react';
import { useNavigate } from 'react-router';
import Heading from '../../component/baseLayout/heading/Heading';


const NotFound = () => {
    const navigation = useNavigate();

    return (
        <div className="flex flex-col w-full min-h-screen overflow-hidden">
            <div className="flex items-center justify-center grow">
                <div className="w-1/3 px-24 py-16 bg-white rounded-md">
                    <Heading
                        title={'404'}
                        size="3xl"
                        className="underline"
                    />
                    <p className="text-black">
                        Halaman tidak di temukan<br />
                    </p>
                    <div className="flex flex-col mt-8">
                        <p
                            className="text-black cursor-pointer hover:text-slate-700"
                            onClick={() => navigation(-1)}>
                            Kembali
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
