import Cookies from 'js-cookie'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import BaseLayout from '../component/baseLayout/BaseLayout'
import DashboardLayout from '../component/dashboardLayout/DashboardLayout'
import { GlobalProvider } from '../contex/GlobalContex'
import ChangePassword from '../pages/dashboard/changePassword/ChangePassword'
import CreateData from '../pages/dashboard/createData/CreateData'
import Dashboard from '../pages/dashboard/Dashboard'
import ListData from '../pages/dashboard/listDataDashboard/ListData'
import Profile from '../pages/dashboard/profile/Profile'
import Home from '../pages/home/Home'
import JobDetail from '../pages/jobVacancy/JobDetail'
import JobVacancy from '../pages/jobVacancy/JobVacancy'
import Login from '../pages/login/Login'
import NotFound from '../pages/notfound'
import Register from '../pages/register/Register'
import { Toaster } from 'react-hot-toast'

const AppRoute = () => {

    const RouteLogin = (param) => {
        if (Cookies.get('token') === undefined) {
            return param.children
        } else if (Cookies.get('token') !== undefined) {
            return <Navigate to={'/'} />
        }
    }

    const RouteDashboard = (param) => {
        if (Cookies.get('token') === undefined) {
            return <Navigate to={'/login'} />
        } else if (Cookies.get('token') !== undefined) {
            return param.children
        }
    }

    return (
        <BrowserRouter>
            <GlobalProvider>

                <Routes>
                    <Route path='/' element={
                        <BaseLayout>
                            <Home />
                        </BaseLayout>
                    } />

                    <Route path='/job-vacancy' element={
                        <BaseLayout>
                            <JobVacancy />
                        </BaseLayout>
                    } />

                    <Route path='/job-vacancy/:Id' element={
                        <BaseLayout>
                            <JobDetail />
                        </BaseLayout>
                    } />

                    <Route path='/login' element={
                        <RouteLogin>
                            <BaseLayout>
                                <Login />
                            </BaseLayout>
                        </RouteLogin>
                    } />
                    <Route path='/register' element={
                        <BaseLayout>
                            <Register />
                        </BaseLayout>
                    } />

                    <Route path='/dashboard' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <Dashboard />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />

                    <Route path='/dashboard/list-data' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <ListData />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />
                    <Route path='/dashboard/list-data/create' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <CreateData />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />

                    <Route path='/dashboard/list-data/edit/:Id' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <CreateData />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />

                    <Route path='/dashboard/profile' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <Profile />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />

                    <Route path='/dashboard/change-password' element={
                        <RouteDashboard>
                            <DashboardLayout>
                                <ChangePassword />
                            </DashboardLayout>
                        </RouteDashboard>
                    } />

                    <Route path='*' element={<NotFound />} />
                </Routes>

            </GlobalProvider>
            <Toaster />
        </BrowserRouter>
    )
}

export default AppRoute
