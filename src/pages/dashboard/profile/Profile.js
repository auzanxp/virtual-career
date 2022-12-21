import Cookies from 'js-cookie'
import moment from 'moment'
import React, { useContext, useEffect } from 'react'
import { GlobalContex } from '../../../contex/GlobalContex'

const Profile = () => {

    const { datas } = useContext(GlobalContex)

    const {
        user,
        setUser
    } = datas


    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(Cookies.get('user')))
        }
    })

    return (
        <>
            <div className="p-4 pt-10 bg-white shadow-xl rounded-xl">
                <div className="mb-4 text-center opacity-90">
                    <span className="relative block">
                        <img alt="profil" src={user?.image_url}  className="object-cover w-40 h-40 mx-auto rounded-full " />
                    </span>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-800 ">
                        {user?.name ?? 'user'}
                    </p>
                    <p className="text-xl font-light text-gray-500 ">
                    {user?.email ?? 'email'}
                    </p>
                    <p className="pt-6 text-xl text-pink-800 ">
                        Create Account
                    </p>
                    <p className="pb-4 font-semibold text-pink-500 text-md">
                        {moment(user?.created_at).fromNow()}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Profile
