import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const DashboardLayout = (props) => {
    return (
        <>
            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-200">
                <div className="flex items-start justify-between">
                    <Sidebar />
                    <div className="flex flex-col w-full md:space-y-4">
                        <Header />
                        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default DashboardLayout
