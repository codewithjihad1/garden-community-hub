import { useContext, useEffect, useState } from 'react';
import { Link, } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/GetServices';
import Loading from '../components/Loading';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        "totalTips": 0,
        "myTips": 0,
        "totalGardeners": 0,
        "recentTips": []
    });
    const [loading, setLoading] = useState(true);

    // Set document title
    useDocumentTitle("Dashboard - Overview");

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);

                // Fetch all tips
                const allTipsResponse = await api.get(`/dashboard/stats?email=${user?.email}`);
                setStats(allTipsResponse.data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchStats();
        }
    }, [user?.email]);



    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex-1 p-8">
            <div>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        Welcome back, {user?.displayName || 'Gardener'}! 🌿
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Here's your garden community overview
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    Total Tips
                                </p>
                                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    {stats.totalTips}
                                </p>
                            </div>
                            <div className="text-4xl">🌱</div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Community garden tips
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    My Tips
                                </p>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    {stats.myTips}
                                </p>
                            </div>
                            <div className="text-4xl">📝</div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Tips you've shared
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    Total Gardeners
                                </p>
                                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                    {stats.totalGardeners}
                                </p>
                            </div>
                            <div className="text-4xl">👥</div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Community members
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            to="/dashboard/add-tip"
                            className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        >
                            <span className="text-2xl">➕</span>
                            <div>
                                <h3 className="font-semibold text-green-700 dark:text-green-300">
                                    Share New Tip
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-400">
                                    Add a garden tip
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/dashboard/my-tips"
                            className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            <span className="text-2xl">📝</span>
                            <div>
                                <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                                    Manage My Tips
                                </h3>
                                <p className="text-sm text-blue-600 dark:text-blue-400">
                                    Edit your tips
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/dashboard/all-tips"
                            className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                        >
                            <span className="text-2xl">🌱</span>
                            <div>
                                <h3 className="font-semibold text-purple-700 dark:text-purple-300">
                                    Browse All Tips
                                </h3>
                                <p className="text-sm text-purple-600 dark:text-purple-400">
                                    Explore community
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dashboard;
