import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {  NavLink, Outlet } from 'react-router';
import { FiLogOut } from "react-icons/fi";


const DashboardLayout = () => {
    const { user, handleLogout } = useContext(AuthContext);

    // navigation items
    const navigationItems = [
        { name: 'Overview', path: '/dashboard', icon: '📊' },
        { name: 'All Tips', path: '/dashboard/all-tips', icon: '🌱' },
        { name: 'Add Tip', path: '/dashboard/add-tip', icon: '➕' },
        { name: 'My Tips', path: '/dashboard/my-tips', icon: '📝' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dashboard">
            <div className="flex gap-5">
                {/* Sidebar */}
                <div className="flex flex-col justify-between w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                            Dashboard
                        </h2>

                        {/* Navigation */}
                        <nav className="space-y-2">
                            {navigationItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                        ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </NavLink>
                            ))}
                        </nav>


                    </div>

                    {/* User Info */}
                    <div className='flex items-center justify-between m-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                        <div>
                            <img
                                src={user?.photoURL || '/default-avatar.png'}
                                alt={user?.displayName}
                                title={user?.displayName}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <button
                                className="flex items-center gap-1 py-1 px-2 text-gray-700 dark:text-gray-300 bg-red-200 rounded-md transition-colors cursor-pointer"
                                title="Logout"
                                onClick={handleLogout}
                            >
                                <FiLogOut />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>



                {/* Main Content */}
                <main className='w-full p-6 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
